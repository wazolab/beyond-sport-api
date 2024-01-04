import brandLogo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: brandLogo
    },
    head: {
      favicon: favicon,
    },
    locales: [
      // 'ar',
      'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    menu: {
      logo: brandLogo
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
