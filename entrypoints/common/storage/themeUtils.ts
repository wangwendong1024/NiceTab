// import { storage } from 'wxt/storage';
import type { ThemeProps } from '~/entrypoints/types';
import { ENUM_COLORS } from '../constants';

export default class ThemeUtils {
  defaultTheme = {
    colorPrimary: ENUM_COLORS.primary,
  };
  themeData = this.defaultTheme;
  async getThemeData() {
    const theme = await storage.getItem<ThemeProps>('local:theme');
    return theme || this.defaultTheme;
  }
  async setThemeData(theme: Partial<ThemeProps>) {
    const themeData = await this.getThemeData();
    this.themeData = { ...themeData, ...theme };
    await storage.setItem('local:theme', this.themeData);
    return this.themeData;
  }
}
