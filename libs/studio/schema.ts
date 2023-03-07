import blockContent from './schemas/blockContent';
import seo from './schemas/seo';
import { redirectHas, redirect } from './schemas/settings/redirect';
import settingsGeneral from './schemas/settings/settingsGeneral';
import settingsSEO from './schemas/settings/settingsSEO';
import settingsCookies from './schemas/settings/settingsCookies';
import settingsSocialMedia from './schemas/settings/settingsSocialMedia';

export default [
  blockContent,
  seo,
  redirect,
  redirectHas,
  settingsGeneral,
  settingsSEO,
  settingsCookies,
  settingsSocialMedia,
];
