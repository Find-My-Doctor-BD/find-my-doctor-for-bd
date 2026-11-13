import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.findmydoctorbd.app",
  appName: "Find My Doctor For BD",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;