/* eslint-disable */
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function LanguageSelectionDropdown({
  url,
  locale,
}: {
  url: string;
  locale: string;
}) {
  const router = useRouter();
  const t = useTranslations();

  const handleLanguageChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLocale = e.target.value;
    try {
      await router.push(url, url, { locale: selectedLocale });
    } catch (error) {
      console.error("Failed to change the language:", error);
    }
  };

  return (
    <div className="relative ml-2 inline-flex w-30">
      <select
        onChange={handleLanguageChange}
        value={locale}
        className="select select-accent w-full max-w-xs"
      >
        <option value="en">{t("Navbar.english")}</option>
        <option value="tr">{t("Navbar.turkish")}</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent-content">
      </div>
    </div>
  );
}