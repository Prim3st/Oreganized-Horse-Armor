let tags_for_horse_armor = [
    'c:horse_armor',
    'c:armors/horse'
];
let horse_armor_to_tag = [
    'oreganized_horse_armor:silver_horse_armor',
    'oreganized_horse_armor:electrum_horse_armor'
];

ServerEvents.tags('item', event => {
    // Add common tags to horse armor
    horse_armor_to_tag.forEach(spear => {
        tags_for_horse_armor.forEach(tag => {
            event.add(tag, spear);
        });
    });
});

ServerEvents.recipes(event => {
    // Add smithing recipe for Electrum Horse Armor
    event.smithing(
        'oreganized_horse_armor:electrum_horse_armor',
        'oreganized:electrum_upgrade_smithing_template',
        'minecraft:diamond_horse_armor',
        'oreganized:electrum_ingot'
    );
});