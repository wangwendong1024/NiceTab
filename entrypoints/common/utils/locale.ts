import { getCustomLocaleMessages } from '~/entrypoints/common/locale';
import type { LanguageTypes } from '~/entrypoints/types';
import { settingsUtils } from '../storage';
import { ENUM_SETTINGS_PROPS, defaultLanguage } from '../constants';

const { LANGUAGE } = ENUM_SETTINGS_PROPS;

// 在react上下文之外获取locale信息
export function getLocaleMessages() {
  const settings = settingsUtils.settings;
  const language = (settings[LANGUAGE] as LanguageTypes) || defaultLanguage;
  return getCustomLocaleMessages(language);
}

export default {
  getLocaleMessages,
};
