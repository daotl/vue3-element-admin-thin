import { LanguageEnum } from './enums/LanguageEnum'
import { LayoutEnum } from './enums/LayoutEnum'
import { SizeEnum } from './enums/SizeEnum'
import { ThemeEnum } from './enums/ThemeEnum'

const { pkg } = __APP_INFO__

const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

const defaultSettings: AppSettings = {
  title: pkg.name,
  version: pkg.version,
  showSettings: true,
  tagsView: true,
  fixedHeader: true,
  sidebarLogo: true,
  layout: LayoutEnum.LEFT,
  theme: mediaQueryList.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
  size: SizeEnum.DEFAULT,
  language: LanguageEnum.ZH_CN,
  themeColor: '#409EFF',
  watermarkEnabled: false,
  watermarkContent: pkg.name,
}

export default defaultSettings
