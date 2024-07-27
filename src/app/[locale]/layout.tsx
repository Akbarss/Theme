import { dir } from "i18next";
import initializeTranslations from "../i18n";

export interface LocaleParamsProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LocaleParamsProps) {
  const { t } = await initializeTranslations(params.locale, ["Metadata"]);

  return {
    title: {
      default: t("homeTitle"),
      template: "%s - Ishonch",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const locales = ["uz", "ru", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>{children}</body>
    </html>
  );
}
