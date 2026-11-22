const test = require('node:test');
const assert = require('node:assert/strict');
const canManageGiveaways = require('../utils/canManageGiveaways');

const permissionFlag = 'ManageMessages';

function createInteraction({ permissions = [], roles = [] } = {}) {
    return {
        memberPermissions: {
            has: permission => permissions.includes(permission)
        },
        member: {
            roles: {
                cache: roles.map(name => ({ name }))
            }
        }
    };
}

test('allows members with ManageMessages permission', () => {
    assert.equal(canManageGiveaways(createInteraction({ permissions: [permissionFlag] }), permissionFlag), true);
});

test('allows members with the configured Giveaways role', () => {
    assert.equal(canManageGiveaways(createInteraction({ roles: ['Giveaways'] }), permissionFlag), true);
});

test('does not allow members without either authorization path', () => {
    assert.equal(canManageGiveaways(createInteraction(), permissionFlag), false);
});

test('handles interactions without cached member details', () => {
    assert.equal(canManageGiveaways({}, permissionFlag), false);
});
