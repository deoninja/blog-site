import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    browserToTerminal: true,
    // 'error' - errors only (default)
    // 'warn' - warnings and errors
    // 'info' - informational messages, warnings, and errors
    // 'true' - all console output
    // 'fatal' - disabled
  },
};

export default nextConfig;
