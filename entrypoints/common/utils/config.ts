import wxtConfig from '../../../wxt.config';

/**
 * 获取扩展的 homepage_url
 */
export function getHomepageUrl(): string {
  return process.env.HOMEPAGE_URL || 'https://github.com/web-dahuyou/NiceTab';
} 