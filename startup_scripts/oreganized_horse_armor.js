let $Item$Properties = Java.loadClass('net.minecraft.world.item.Item$Properties');
const $AnimalArmorItem = Java.loadClass('net.minecraft.world.item.AnimalArmorItem');
// Load tier and material for Oreganized items
let $ArgentumItems = Java.loadClass('galena.oreganized.argentum.index.ArgentumItems');
let $ElectrumItems = Java.loadClass('galena.oreganized.electrum.index.ElectrumItems');

StartupEvents.registry('item', event => {
    // Create Silver Horse Armor
    event.create('oreganized_horse_armor:silver_horse_armor', 'animal_armor').material($ArgentumItems.SILVER_MATERIAL).bodyType('equestrian');

    // Create Electrum Horse Armor
    event.create('oreganized_horse_armor:electrum_horse_armor', 'animal_armor').material($ElectrumItems.ELECTRUM_MATERIAL).bodyType('equestrian');
});

StartupEvents.modifyCreativeTab('minecraft:combat', event => {
    // Add items to appropriate places in the Creative inventory
    event.addAfter('minecraft:iron_horse_armor', 'oreganized_horse_armor:silver_horse_armor');
    event.addAfter('minecraft:diamond_horse_armor', 'oreganized_horse_armor:electrum_horse_armor');
});

ItemEvents.modification(event => {
    // Correct attributes of Silver Horse Armor
    event.modify('oreganized_horse_armor:silver_horse_armor', item => {
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "minecraft:generic.armor",
                {
                    amount: 5,
                    id: "minecraft:armor",
                    operation: "add_value"
                },
                "body"
            )
            .withModifierAdded(
                "oreganized:invincibility_frames",
                {
                    amount: 0.2,
                    id: "oreganized:invincibility_frames",
                    operation: "add_value"
                },
                "body"
            );
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers());
    });

    // Correct attributes of Electrum Horse Armor
    event.modify('oreganized_horse_armor:electrum_horse_armor', item => {
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "minecraft:generic.armor",
                {
                    amount: 11,
                    id: "minecraft:armor",
                    operation: "add_value"
                },
                "body"
            )
            .withModifierAdded(
                "minecraft:generic.movement_speed",
                {
                    amount: 0.05,
                    id: "minecraft:movement_speed",
                    operation: "add_multiplied_base"
                },
                "body"
            );
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers());
    });
});