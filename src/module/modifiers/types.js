/**
 * This object defines the available modifier types in the Starfinder game system.
 * By the Starfinder rules, modifiers of the same type do not stack.
 */
export const SFRPGBonusTypes = Object.freeze({
    ABILITY: "ability",
    ARMOR: "armor",
    BASE: "base",
    CIRCUMSTANCE: "circumstance",
    DIVINE: "divine",
    ENHANCEMENT: "enhancement",
    INSIGHT: "insight",
    LUCK: "luck",
    MORALE: "morale",
    RESISTANCE: "resistance",
    RACIAL: "racial",
    UNTYPED: "untyped"
});

/**
 * These are the properties/property categories of an actor that a modifier can affect.
 */
export const SFRPGEffectType = Object.freeze({
    RANGED_ATTACKS: "ranged-attacks",
    MELEE_ATTACKS: "melee-attacks",
    SPELL_ATTACKS: "spell-attacks",
    WEAPON_ATTACKS: "weapon-attacks",
    ALL_ATTACKS: "all-attacks",
    WEAPON_PROPERTY_ATTACKS: "weapon-property-attacks",
    WEAPON_CATEGORY_ATTACKS: "weapon-category-attacks",
    RANGED_DAMAGE: "ranged-damage",
    MELEE_DAMAGE: "melee-damage",
    SPELL_DAMAGE: "spell-damage",
    WEAPON_DAMAGE: "weapon-damage",
    ALL_DAMAGE: "all-damage",
    WEAPON_PROPERTY_DAMAGE: "weapon-property-damage",
    WEAPON_CATEGORY_DAMAGE: "weapon-category-damage",
    BASE_ATTACK_BONUS: "base-attack-bonus",
    AC: "ac",
    CMD: "cmd",
    ACP: "acp",
    INITIATIVE: "initiative",
    ABILITY_SKILLS: "ability-skills",
    SKILL: "skill",
    ALL_SKILLS: "all-skills",
    SAVES: "saves",
    SAVE: "save",
    SPELL_SAVE_DC: "spell-save-dc",
    SPEED: "speed",
    ALL_SPEEDS: "all-speeds",
    SPECIFIC_SPEED: "specific-speed",
    MULTIPLY_ALL_SPEEDS: "multiply-all-speeds",
    DAMAGE: "damage",
    ABILITY_CHECKS: "ability-checks",
    ABILITY_CHECK: "ability-check",
    ABILITY_SCORE: "ability-score",
    ABILITY_MODIFIER: "ability-modifier",
    ABILITY_MODIFIERS: "ability-modifiers",
    HIT_POINTS: "hit-points",
    STAMINA_POINTS: "stamina-points",
    SKILL_POINTS: "skill-points",
    SKILL_RANKS: "skill-ranks",
    RESOLVE_POINTS: "resolve-points",
    SPELL_RESISTANCE: "spell-resistance",
    DAMAGE_REDUCTION: "damage-reduction",
    BULK: "bulk",
    BULK_CALCULATION: "bulk-calculation",
    ACTOR_RESOURCE: "actor-resource",
    ENERGY_RESISTANCE: "energy-resistance"
});

/**
 * Constant modifiers can include formulas, but do not include anything involving a dice roll.
 */
export const SFRPGModifierType = Object.freeze({
    CONSTANT: "constant",
    FORMULA: "formula"
});
