function canManageGiveaways(interaction, manageMessagesPermission) {
    const hasManageMessages = interaction.memberPermissions?.has(manageMessagesPermission) ?? false;
    const hasGiveawaysRole = interaction.member?.roles?.cache?.some(role => role.name === 'Giveaways') ?? false;

    return hasManageMessages || hasGiveawaysRole;
}

module.exports = canManageGiveaways;
