import fs from "fs";
import path from "path";
import OpenAI from "openai";

// Script reads OPENAI_API_KEY from first CLI arg (no dotenv)

async function generateLogo() {
  const apiKey = process.argv[2];
  if (!apiKey) {
    console.error(
      "Usage: node scripts/generate-logo.js <OPENAI_API_KEY>"
    );
    process.exit(1);
  }

  const openai = new OpenAI({ apiKey });
  try {
    console.log("Generating logo via OpenAI Images API...");
    const response = await openai.images.generate({
      prompt: "A sleek, modern logo for the personal portfolio of software engineer Amosh Sapkota",
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });
    const b64 = response.data[0].b64_json;
    const buffer = Buffer.from(b64, "base64");
    const outPath = path.resolve(process.cwd(), "src", "assets", "logo.png");
    fs.writeFileSync(outPath, buffer);
    console.log(`Logo image written to ${outPath}`);
  } catch (err) {
    console.error("Failed to generate logo:", err);
    process.exit(1);
  }
}

generateLogo();