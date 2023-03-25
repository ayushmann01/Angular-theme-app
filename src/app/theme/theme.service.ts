import { Injectable } from '@angular/core';
import { DARK, LIGHT, Theme } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}
  private activeTheme: Theme = LIGHT;
  private availableThemes: Theme[] = [LIGHT, DARK];

  public getActiveTheme(): Theme {
    return this.activeTheme;
  }

  public setActiveTheme(theme: Theme) {
    this.activeTheme = theme;
    Object.keys(this.activeTheme.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.activeTheme.properties[property]
      );
    });
  }

  public setLightTheme() {
    this.setActiveTheme(LIGHT);
  }
  public setDarkTheme() {
    this.setActiveTheme(DARK);
  }

  isDarkTheme(): boolean {
    return this.activeTheme.name === DARK.name;
  }
  isLightTheme(): boolean {
    return this.activeTheme.name === LIGHT.name;
  }
}
