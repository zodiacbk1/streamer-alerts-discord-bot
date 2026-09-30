import { MessageFlags, SlashCommandBuilder } from "discord.js";
import type { ChatInputCommandInteraction } from "discord.js";
import type { Command } from "../types/discord.js";

const ROLE_ID = "PASTE_ROLE_ID_HERE";

export const announceCommand: Command = {
  cooldownMs: 5_000,
  data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("Ping the announcement role"),

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply({
      content: `<@&${1544774415475155065}>`,
      allowedMentions: { roles: [1544774415475155065] },
      flags: MessageFlags.Ephemeral,
    });
  },
};
