import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NextIntlProvider } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";

const MyApp: AppType<{ session: Session | null; messages?: AbstractIntlMessages }> = ({
  Component,
  pageProps: { session, messages, ...pageProps },
}) => {
  return (
    <NextIntlProvider messages={messages}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </NextIntlProvider>
  );
};

export default api.withTRPC(MyApp);