import fs from "node:fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const saveMediaFile = async (buffer: Uint8Array, filename: string) => {
  try {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      year,
      month
    );

    // Check if the directory exists, and create it if it doesn't
    try {
      await fs.access(uploadDir);
    } catch (error) {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    console.log(`File saved to ${filePath}`);
    revalidatePath("/");
    return { filePath };
  } catch (error) {
    console.error("File upload error:", error);
    throw new Error("File upload failed");
  }
};

export default saveMediaFile;
