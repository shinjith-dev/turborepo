import picocolors from "picocolors";
import checkForUpdate from "update-check";
import { logger } from "@turbo/utils";
import cliPkgJson from "../../package.json";

const update = checkForUpdate(cliPkgJson).catch(() => null);

export async function notifyUpdate(): Promise<void> {
  try {
    const res = await update;
    if (res?.latest) {
      logger.log();
      logger.log(
        picocolors.yellow(
          picocolors.bold(
            `A new version of \`${cliPkgJson.name}\` is available!`
          )
        )
      );
      logger.log();
    }
    process.exit();
  } catch (_) {
    // ignore error
  }
}
