
export interface Asset {
  title: string,
  category: string,
  introduction?: string,
  abilities: Ability[],
  inputs?: AbilityInput[]
}

export interface AbilityInput {
  label: string,
  value: string
}

export interface Ability {
  id?: string,
  title?: string,
  description: string
}

export const data: Asset[] = [
  {
    title: 'Cave Lion',
    category: 'Companion',
    introduction: 'Your cat takes down its prey.',
    abilities: [
      {
        title: 'Eager',
        description: `When your cat chases down big game, you may Resupply with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit`,
      },
      {
        title: 'Inescapable',
        description: `When you Enter the Fray or Strike by sending your cat to attack, roll +edge. On a hit, take +2 momentum.`
      },
      {
        title: 'Protective',
        description: `When you Make Camp, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum.`
      }
      ],
  },
  {
    title: 'Giant Spider',
    category: 'Companion',
    introduction: 'Your spider uncovers secrets.',
    abilities: [
      {
        title: 'Discreet',
        description: `When you Secure an Advantage by sending your spider to scout a place, add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Soul-Piercing',
        description: `ou may Face Danger +shadow by sending your spider to secretly study someone. On a hit, the spider returns to reveal the target’s deepest fears through a reflection in its glassy eyes. Use this to Gather Information and reroll any dice.`
      },
      {
        title: 'Ensnaring',
        description: `When your spider sets a trap, add +1 as you Enter the Fray +shadow. On a strong hit, also inflict 2 harm.`
      }
    ]
  },
  {
    title: 'Hawk',
    category: 'Companion',
    introduction: 'Your hawk can aid you while it is aloft.',
    abilities: [
      {
        title: 'Far-seeing',
        description: `When you Undertake a Journey, or when you Resupply by hunting for small game, add +1.`
      },
      {
        title: 'Fierce',
        description: `When you Secure an Advantage +edge using your hawk to harass and distract your foes, add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Vigilant',
        description: `When you Face Danger +wits to detect an approaching threat, or when you Enter the Fray +wits against an ambush, add +2.`
      }
    ]
  },
  {
    title: 'Horse',
    category: 'Companion',
    introduction: 'You and your horse ride as one.',
    abilities: [
      {
        title: 'Swift',
        description: `When you Face Danger +edge using your horse’s speed and grace, or when you Undertake a Journey, add +1.`
      },
      {
        title: 'Fearless',
        description: `When you Enter the Fray or Secure an Advantage +heart by charging into combat, add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Mighty',
        description: `When you Strike or Clash at close range while mounted, add +1 and inflict +1 harm on a hit.`
      }
    ]
  },
  {
    title: 'Hound',
    category: 'Companion',
    introduction: 'Your hound is your steadfast companion.',
    abilities: [
      {
        title: 'Sharp',
        description: `When you Gather Information using your hound’s keen senses to track your quarry or investigate a scene, add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Ferocious',
        description: `When you Strike or Clash alongside your hound and score a hit, inflict +1 harm or take +1 momentum.`
      },
      {
        title: 'Loyal',
        description: `When you Endure Stress in the company of your hound, add +1.`
      }
    ]
  },
  {
    title: 'Kindred',
    category: 'Companion',
    introduction: 'Your friend stands by you.',
    abilities: [
      {
        title: 'Skilled',
        description: `When you make a move outside of combat aided by your companion’s expertise, add +1.`
      },
      {
        title: 'Shield-Kin',
        description: `When you Clash or Battle alongside your companion, or when you Face Danger against an attack by standing together, add +1.`
      },
      {
        title: 'Bonded',
        description: `Once you mark a bond with your companion, add +1 when you Face Desolation in their presence.`
      }]
  },
  {
    title: 'Mammoth',
    category: 'Companion',
    introduction: 'Your mammoth walks a resolute path.',
    abilities: [
      {
        title: 'Lumbering',
        description: `When your mammoth travels with you as you Undertake a Journey, you may add +2 but suffer -1 momentum (decide before rolling).`
      },
      {
        title: 'Beast of burden',
        description: `When you make a move which requires you to roll +supply, you may instead roll +your mammoth’s health.`
      },
      {
        title: 'Overpowering',
        description: `When you Strike or Clash by riding your mammoth against a pack of foes, add +1 and inflict +1 harm on a hit.`
      }
    ]
  },
  {
    title: 'Owl',
    category: 'Companion',
    introduction: 'Your owl soars through the darkness.',
    abilities: [
      {
        title: 'Nocturnal',
        description: `If you Resupply at night by sending your owl to hunt, take +2 momentum on a hit. When you Enter the add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Sage',
        description: `When you leverage your owl’s secret knowledge to perform a ritual, add +1 or take +1 momentum on a hit (decide before rolling).`
      },
      {
        title: 'Embodying',
        description: `When you Face Death, take your owl’s health as +momentum before you roll.`
      }
    ]
  },
  {
    title: 'Raven',
    category: 'Companion',
    introduction: 'Your raven heeds your call.',
    abilities: [
      {
        title: 'Sly',
        description: `When you Secure an Advantage or Face Danger +shadow using your raven to perform trickery (such as creating a distraction or stealing a small object) add +1 and take +1 momentum on a hit.`
      },
      {
        title: 'Knowing',
        description: `When you Face Death, add +2 and take +1 momentum on a hit.`
      },
      {
        title: 'Diligent',
        description: `When your raven carries messages for you, you may Secure an Advantage, Gather Information, or Compel from a distance.`
      }
    ]
  },
  {
    title: 'Young Wyvern',
    category: 'Companion',
    introduction: 'Your wyvern won’t devour you. For now.',
    abilities: [
      {
        title: 'Insatiable',
        description: `When you Undertake a Journey and score a hit, you may suffer -1 supply in exchange for +2 momentum.`
      },
      {
        title: 'Indomitable',
        description: `When you make the Companion Endure Harm move for your wyvern, add +2 and take +1 momentum on a hit.`
      },
      {
        title: 'Savage',
        description: `When you Strike by commanding your wyvern to attack, roll +heart. Your wyvern inflicts 3 harm on a hit.`
      }
    ]
  },
  {
    title: 'Alchemist',
    category: 'Path',
    abilities: [
      {
        description: `When you create an elixir, choose an effect: Deftness (edge), audacity (heart),
                      vigor (iron), slyness (shadow), or clarity (wits). Then, suffer -1 supply and roll +wits.
                       On a strong hit, you create a single dose. The character who consumes the
                      elixir must Face Danger +iron and score a hit, after which they add +1 when
                      making moves with the related stat until their health, spirit, or momentum fall
                      below +1. On a weak hit, as above, but suffer an additional -1 supply to create it.`
      },
      {
        description: `As above, and you may choose two effects for a single dose, or create two doses of the same effect.`
      },
      {
        description: `When you prepare an elixir, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Animal Kin',
    category: 'Path',
    abilities: [
      {
        description: `When you make a move to pacify, calm, control, aid, or fend off an animal (or
                      an animal or beast companion), add +1
                      and take +1 momentum on a hit.`
      },
      {
        description: `You may add or upgrade an animal or beast companion asset for 1 fewer
                      experience. Once you mark all their abilities, you may Forge a Bond with
                      them and take an automatic strong hit.
                      When you do, mark a bond twice and take 1 experience.`
      },
      {
        description: `Once per fight, when you leverage your animal or beast companion to make a
                      move, reroll any dice. On a hit, take +1 momentum.`
      }
    ]
  },
  {
    title: 'Battle-Sworn',
    category: 'Path',
    introduction: `Once you mark a bond with a leader or faction...`,
    abilities: [
      {
        description: `When you Swear an Iron Vow to serve your leader or faction on a mission, you may reroll any dice. When you Fulfill Your Vow and mark experience, take +1 experience.`
      },
      {
        description: `When you Sojourn or Make Camp in the company of your banner-kin, add +1 and take +1 momentum on a hit`
      },
      {
        description: `When you Enter the Fray bearing your banner, add +1 and take +1 momentum on a hit. When you burn momentum
                      while carrying your banner in combat, take +1 momentum after you reset.`
      }
    ]
  },
  {
    title: 'Battle-Scarred',
    category: 'Path',
    introduction: 'Once you become maimed...',
    abilities: [
      {
        description: `You focus your energies: Reduce your edge or iron by 1 and add +2 to wits
                      or heart, or +1 to each (to a maximum of +4).`
      },
      {
        description: `You overcome your limitations: Reduce your maximum health by 1.
                      Maimed no longer counts as a debility, and does not reduce your maximum
                      momentum or reset value. When you Endure Stress +heart, take +1 momentum on a strong hit.`
      },
      {
        description: `You have stared down death before: When you are at 0 health and Endure Harm, you may roll +wits or +heart
                      (instead of +health or +iron). If you do, take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Blade-Bound',
    category: 'Path',
    introduction: `Once you mark a bond with a kin-blade, a sentient weapon imbued with the spirit of your ancestor...`,
    abilities: [
      {
        description: `When you Enter the Fray or Draw the Circle while wielding your kin-blade,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Gather Information by listening to the whispers of your kin-blade, add +1 and take +2 momentum
                      on a hit. Then, Endure Stress (2 stress).`
      },
      {
        description: `When you Strike with your kin-blade to inflict savage harm (decide before rolling), add +1 and inflict +2 harm on
                      a hit. Then, Endure Stress (2 stress).`
      }
    ]
  },
  {
    title: 'Bonded',
    category: 'Path',
    abilities: [
      {
        description: `When you make a move which gives you an add for sharing a bond, add +1 more.`
      },
      {
        description: `When you completely fill a box on your bonds progress track, envision what your relationships have taught
                      you. Then, take 1 experience and +2 momentum.`
      },
      {
        description: `When you make a move in a crucial moment and score a miss, you may cling to thoughts of your bond-kin for
                      courage or encouragement. If you do, reroll any dice. On another miss, in addition to the outcome of the move,
                      you must mark shaken or corrupted. If both debilities are already marked, Face Desolation.`
      }
    ]
  },
  {
    title: 'Commander',
    category: 'Path',
    abilities: [
      {
        description: `You lead a warband with +4 strength. Roll +strength when you command your warband to Face Danger, Secure an
                      Advantage, Compel, or Battle. When you face the negative outcome of any move, you may suffer -1 strength as the cost.
                      When you Make Camp or Sojourn and score a hit, take +1 strength. While at 0 strength, this asset counts as a debility.`
      },
      {
        description: `You may dispatch scouts from your warband to Gather Information or Resupply; if you do, roll +strength.`
      },
      {
        description: `Once you Forge a Bond with your warband, take +1 momentum on a hit when you leverage a warband ability.`
      }
    ]
  },
  {
    title: 'Dancer',
    category: 'Path',
    abilities: [
      {
        description: `When you Secure an Advantage +edge by dancing for an audience, add +1
                      and take +2 momentum on a hit. On a strong hit, also add +2 (one time only)
                      if you make a move to interact with someone in the audience.`
      },
      {
        description: `When you Face Danger +edge in a fight by nimbly avoiding your foe’s attacks,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you or an ally make a progress move and score a hit, you may perform a dance to commemorate the event. If you
                      do, roll +edge. On a strong hit, you and each of your allies take +2 momentum
                      and +1 spirit. On a weak hit, you take +1 momentum or +1 spirit, but your allies are unmoved.`
      }
    ]
  },
  {
    title: 'Devotant',
    category: 'Path',
    abilities: [
      {
        description: `When you say your daily prayers, you may Secure an Advantage by asking your god to grant a blessing.
                      If you do, roll +your god’s stat. On a hit, take +2 momentum.`
      },
      {
        description: `When you Swear an Iron Vow to serve your god on a divine quest, you may roll +your god’s stat and reroll any
                      dice. When you Fulfill Your Vow and mark experience, take +1 experience.`
      },
      {
        description: `When you Sojourn by sharing the word of your god, you may roll +your god’s stat. If you do, take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Empowered',
    category: 'Path',
    abilities: [
      {
        description: `When you Sojourn and score a weak hit or miss, you may claim the rights of hospitality warranted by your title
                      or lineage. If you do, roll all dice again and add +1. On a miss, you are
                      refused, and your presumption causes significant new trouble.`
      },
      {
        description: `When you exert your title or lineage to Compel, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you forgo your title or lineage and Forge a Bond as an equal, or when you Swear an Iron Vow to serve
                      someone of a lower station, add +1 and take +1 momentum or +1 spirit on a hit.`
      }
    ]
  },
  {
    title: 'Fated',
    category: 'Path',
    abilities: [
      {
        description: `When you Face Death or Face Desolation while your epic background vow is unfulfilled, it is not yet your
                      time. Instead of rolling, you may take an automatic strong hit. If you do,
                      this asset counts as a debility (and you no longer have this protection) until
                      you next Reach a Milestone on the background vow.`
      },
      {
        description: `When you Reach a Milestone on your background vow, take +2 momentum or +1 spirit.`
      },
      {
        description: `For every two boxes filled on your background vow progress track, take 1
                      experience. When you Fulfill Your Vow, your fate is at hand. Envision your final
                      sacrifice and reroll any dice.`
      }
    ]
  },
  {
    title: 'Fortune Hunter',
    category: 'Path',
    abilities: [
      {
        description: `When you Swear an Iron Vow to someone under the promise of payment,
                      add +1 and give the quest a special mark. When you successfully Fulfill Your Vow
                      to them, take +wealth equal to the rank of the quest. If you leverage wealth when
                      making a move where resources are a factor, add +wealth and suffer -1 wealth.`
      },
      {
        description: `When in a community or trading, you may suffer -1 wealth and take +2 supply.`
      },
      {
        description: `When you Resupply by scavenging or looting, and score a strong hit with
                      a match, you may envision finding an object of value. If you do, take +1
                      supply (instead of +2) and +1 wealth.`
      }
    ]
  },
  {
    title: 'Herbalist',
    category: 'Path',
    abilities: [
      {
        description: `When you attempt to Heal using herbal remedies, and you have at least
                      +1 supply, choose one (decide before rolling).
                      • Add +2.
                      • On a hit, take or give an additional +1 health.`
      },
      {
        description: `When you Heal a companion, ally, or other character, and score a hit, take +1 spirit or +1 momentum.`
      },
      {
        description: `When you Make Camp and choose the option to partake, you can create a restorative meal. If you do, you and
                      your companions take +1 health. Any allies who choose to partake also take +1 health, and do not suffer -supply.`
      }
    ]
  },
  {
    title: 'Honorbound',
    category: 'Path',
    abilities: [
      {
        description: `When you Turn the Tide, envision how your vows give you strength in this moment.
                      Then, when you make your move, add +2 (instead of +1) and take +1 momentum on a hit.`
      },
      {
        description: `When you Secure an Advantage or Compel by telling a hard truth, add +1 and take +1 momentum on a hit.
                      On a weak hit or miss, envision how this truth complicates your current situation.`
      },
      {
        description: `When you Fulfill Your Vow and score a miss, you may reroll one challenge die.
                      If you score a miss again, reduce your maximum spirit by 1. You may recover
                      this lost spirit when you next Fulfill Your Vow and score a strong hit.`
      }
    ]
  },
  {
    title: 'Improviser',
    category: 'Path',
    abilities: [
      {
        description: `When you Check your Gear, you may roll +wits (instead of +supply). If
                      you do, envision how you make do with a clever solution, and take +1 momentum on a hit.`
      },
      {
        description: `When you Secure an Advantage or Face Danger by cobbling together an ad hoc tool or apparatus,
                      add +1 and take +1 momentum on a hit. After rolling, you may also suffer -1 supply and add +1 more.`
      },
      {
        description: `When you throw caution to the wind and make an impulsive move in a risky situation,
                      you may add +2. If you do, take +1 momentum on a strong hit, but count a weak hit as a miss.`
      }
    ]
  },
  {
    title: 'Infiltrator',
    category: 'Path',
    abilities: [
      {
        description: `When you make a move to breach, traverse, or hide within an area held by an enemy,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Gather Information within an enemy area to discover their positions, plans, or methods, or when
                      you Secure an Advantage within that area through observation, you may roll +shadow (instead of +wits).
                       If you do, take +1 momentum on a hit.`
      },
      {
        description: `When you Resupply within an enemy area by scavenging or looting, you may roll +shadow (instead of +wits).
                      If you do, take +1 momentum or +1 supply on a hit.`
      }
    ]
  },
  {
    title: 'Lorekeeper',
    category: 'Path',
    abilities: [
      {
        description: `You are the bearer of a mystical archive. When you Secure an Advantage or Gather Information
                      using lore recalled from your studies, add +1.
                      If you have a few hours to search the archive, add +2.
                      On a hit, envision the obscure but helpful knowledge you put to use (Ask the Oracle if unsure),
                      and take +1 momentum.`
      },
      {
        description: `When you learn of a site or object holding lost knowledge, and Swear an Iron Vow to
                      recover it for the archive, reroll any dice. When you Fulfill Your Vow and mark
                      experience, take +1 experience.`
      },
      {
        description: `One time only, you may browse the archive’s forbidden depths. If you do,
                      raise your wits by 1 and roll an action die. On 1-3, you must also mark corrupted or
                      Face Desolation (ignoring momentum).`
      }
    ],
  },
  {
    title: 'Loyalist',
    category: 'Path',
    abilities: [
      {
        description: `When you Aid Your Ally, add +1 and take +1 momentum on a hit. This is
                      in addition to the benefits taken by your ally.`
      },
      {
        description: `When an ally makes the Endure Stress move in your company, they add +1
                      and you take +1 momentum on a hit.`
      },
      {
        description: `When you stand with your ally as they make a progress move, envision
                      how you support them. Then, roll one challenge die. On a 1-9, your ally may
                      replace one of their challenge dice with yours. On a 10, envision how you
                      inadvertently undermine their action;
                      your ally must replace their lowest challenge die with yours.`
      }
    ]
  },
  {
    title: 'Masked',
    category: 'Path',
    introduction: `Once you mark a bond with elves, and are gifted a mask of precious elderwood...`,
    abilities: [
      {
        description: `Choose your mask’s material.
                    - Thunderwood: Edge / Health
                    - Bloodwood: Iron / Health
                    - Ghostwood: Shadow / Spirit
                    - Whisperwood: Wits / Spirit
                    When you wear the mask and make a move which uses its stat, add +1. If you
                    roll a 1 on your action die, suffer -1 to the associated track (in addition to any
                    other outcome of the move).`
      },
      {
        description: `As above, and you may instead add +2 and suffer -2 (decide before rolling).`
      },
      {
        description: `When you Face Death or Face Desolation while wearing the mask,
                      you may roll +its stat (instead of +heart).`
      }
    ]
  },
  {
    title: 'Oathbreaker',
    category: 'Path',
    introduction: 'Once you Forsake Your Vow...',
    abilities: [
      {
        description: `This asset counts as a debility. One time only, when you Swear an Iron Vow to redeem yourself
        (extreme or greater), give that vow a special mark. When you Reach a Milestone on the marked vow, take +2 momentum.`
      },
      {
        description: `When you Secure an Advantage or Compel by reaffirming your commitment to your marked vow, add
                      +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Fulfill Your Vow on your marked quest and score a hit, you find redemption
                      and automatically activate this ability at no cost. You may then improve one of
                      your stats by +1 and discard this asset.`
      }
    ]
  },
  {
    title: 'Outcast',
    category: 'Path',
    abilities: [
      {
        description: `When your supply is reduced to 0, suffer any remaining -supply as -momentum.
                      Then, roll +wits. On a strong hit, you manage to scrape by and take +1 supply.
                       On a weak hit, you may suffer -2 momentum in exchange for +1 supply. On a miss, you are Out of Supply.`
      },
      {
        description: `When you Sojourn, you may reroll any dice. If you do (decide before your first roll),
        your needs are few, but your isolation sets you apart from others. A strong hit counts as a weak hit.`
      },
      {
        description: `When you Reach Your Destination and score a strong hit, you recall or recognize something helpful
                      about this place. Envision what it is, and take +2 momentum.`
      }
    ]
  },
  {
    title: 'Pretender',
    category: 'Path',
    abilities: [
      {
        description: `When you establish a false identity, roll +shadow. On a strong hit, you may add
                      +2 when you make moves using this identity to deceive or influence others.
                      If you roll a 1 on your action die when using your false identity, someone
                      doubts you. Make appropriate moves to reassure them or prevent them from
                      revealing the truth. On a weak hit, as above, but add +1 (instead of +2).`
      },
      {
        description: `As above, and you may roll +shadow (instead of +heart) when you Sojourn
                      under your false identity. If you do, take +1 momentum on a hit.`
      },
      {
        description: `When you Secure an Advantage by revealing your true identity in a dramatic moment, reroll any dice.`
      }
    ]
  },
  {
    title: 'Revenant',
    category: 'Path',
    introduction: `Once you Face Death and return to the world of the living...`,
    abilities: [
      {
        description:  `When you are at 0 health, and Endure Harm or Face Death, add +1.
                      If you then burn momentum to improve your result, envision what bond or vow
                      binds you to this world, and take +2 momentum after you reset.`
      },
      {
        description: `When you make a move to investigate, oppose, or interact with a horror, spirit,
                      or other undead being, add +1.`
      },
      {
        description: `When you bring death to your foe to End the Fight,
                      you may burn momentum to cancel one (not both) of the challenge dice if your momentum is
                      greater than the value of that die. If you do, Endure Stress (2 stress)`
      }
    ]
  },
  {
    title: 'Rider',
    category: 'Path',
    introduction: 'If you are with your horse companion...',
    abilities: [
      {
        description: `When you Heal your horse, or when you Face Danger to calm or encourage it,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Undertake a Journey, you may push your horse harder and add +1 (after rolling).
                      If you do, make the Companion Endure Harm move (1 harm).`
      },
      {
        description: `When you Secure an Advantage +wits by sizing up a perilous situation from
                      the saddle, you are one with your horse’s instincts. Add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Ritualist',
    category: 'Path',
    introduction: `Once you Fulfill Your Vow (formidable or greater) in service to an elder mystic,
                   and Forge a Bond to train with them...`,
    abilities: [
      {
        description: `When you Secure an Advantage to ready yourself for a ritual, envision how you prepare.
                      Then, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you perform a ritual, you may suffer -1 supply and add +1 (decide before rolling).`
      },
      {
        description: `When you tattoo the essence of a new ritual onto your skin, envision the mark you create.
                      You may then purchase and upgrade that ritual asset for 1 fewer experience.`
      }
    ]
  },
  {
    title: 'Shadow-Kin',
    category: 'Path',
    introduction: 'Once you become corrupted...',
    abilities: [
      {
        description: `You harden your heart: Reduce your heart stat by 1 and add up to +2 to shadow (to a maximum of +4).`
      },
      {
        description: `You are attuned to the realms of shadow: When you perform a ritual, add +1.`
      },
      {
        description: `You know the sly ways of death: When you Face Death, you may roll +shadow (instead of +heart).
                      On a weak hit, if you choose to undertake a deathbound quest,
                      you may roll +shadow (instead of +heart) and reroll any dice as you Swear an Iron Vow.
                      When you Fulfill Your Vow on that quest and mark experience, take +2 experience.`
      }
      ]
  },
  {
    title: 'Sighted',
    category: 'Path',
    abilities: [
      {
        description: `When you Face Danger or Gather Information to identify or detect mystic forces,
                    add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Compel, Forge a Bond, or Test Your Bond with a fellow mystic or mystical being,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Secure an Advantage by studying someone or something in a
                      charged situation, add +1 and take +1 momentum on a hit. When you also
                      pierce the veil to explore deeper truths (decide before rolling), you may reroll any dice.
                      If you do, count a weak hit as a miss.`
      }
    ]
  },
  {
    title: 'Slayer',
    category: 'Path',
    abilities: [
      {
        description: `When you Gather Information by tracking a beast or horror,
                      or when you Secure an Advantage by readying yourself for a fight against them,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Swear an Iron Vow to slay a beast or horror, you may reroll any dice.
                      When you Fulfill Your Vow and mark experience, take +1 experience.`
      },
      {
        description: `When you slay a beast or horror (at least formidable), you may take a trophy and choose one.
                      • Power a ritual: When you or an ally make a ritual move, reroll any dice (one time only).
                      • Prove your worth: When you Sojourn, reroll any dice (one time only).`
      }
    ]
  },
  {
    title: 'Spirit-Bound',
    category: 'Path',
    abilities: [
      {
        description: `You are haunted by someone whose death you caused through your actions or failures.
                      When you consult with their spirit to Secure an Advantage or Gather Information,
                      add +1 and take +2 momentum on a hit. On a weak hit, also Endure Stress (1 stress).`
      },
      {
        description: `When you Face Death guided by the spirit, add +1. On a strong hit, envision
                      what you learn and take 1 experience.`
      },
      {
        description: `One time only, when you successfully Fulfill Your Vow (formidable or greater) in service to the spirit, choose one.
                      • Let them go: Take 2 experience for each marked ability and discard this asset.
                      • Deepen your connection: Add +1 more when you leverage this asset.`
      }
    ]
  },
  {
    title: 'Storyweaver',
    category: 'Path',
    abilities: [
      {
        description: `When you Secure an Advantage, Compel, or Forge a Bond by sharing an inspiring or enlightening
                      song, poem, or tale, envision the story you tell.
                      Then, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Make Camp and choose the option to relax, you may share a story with your allies
                      or compose a new story if alone. If you do, envision the story you tell and take +1 spirit
                      or +1 momentum. Any allies who choose to relax in your company may also take +1 spirit
                      or +1 momentum.`
      },
      {
        description: `When you Sojourn within a community with which you share a bond, add +2 (instead of +1).`
      }
    ]
  },
  {
    title: 'Trickster',
    category: 'Path',
    abilities: [
      {
        description: `When you Face Danger, Secure an Advantage, or Compel by lying, bluffing,
                      stealing, or cheating, add +1.`
      },
      {
        description: `When you Gather Information by investigating a devious scheme,
                      you may roll +shadow (instead of +wits). If you do, take +2 momentum on a hit.`
      },
      {
        description: `When you Forge a Bond for a relationship founded on a lie, choose one.
        • Keep your secret: Roll +shadow (instead of +heart).
        • Reveal the truth: Roll +heart. On a strong hit, mark a bond twice and take 1 experience.
          A weak hit counts as a miss.`
      }
    ]
  },
  {
    title: 'Veteran',
    category: 'Path',
    abilities: [
      {
        description: `When you burn momentum to improve your result in combat, envision how your hard-won
                      fighting experience gives you the upper hand. Then, take +1 momentum after you reset,
                      and add +1 when you make your next move.
                      Once per fight, you also take initiative when burning momentum to improve a miss to a weak hit.`
      },
      {
        description: `When you Swear an Iron Vow to someone who fought beside you, or Forge a Bond with them,
                      add +2 and take +2 momentum on a hit.`
      },
      {
        description: `When you Resupply by looting the dead on a field of battle, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Waterborn',
    category: 'Path',
    abilities: [
      {
        description: `When you Face Danger, Gather Information, or Secure an Advantage related to your knowledge
                      of watercraft, water travel, or aquatic environments or creatures,
                      add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Undertake a Journey by boat or ship, add +1. On a strong hit, also choose one.
        • The wind is at your back: Mark progress twice.
        • Find safe anchor: Make Camp now and reroll any dice.
        • Reap the bounty: Resupply now and reroll any dice.`
      },
      {
        description: `When you Enter the Fray aboard a boat or ship, reroll any dice.`
      }
    ]
  },
  {
    title: 'Wayfinder',
    category: 'Path',
    abilities: [
      {
        description: `When you Undertake a Journey, take +1 momentum on a strong hit. If you burn momentum to
        improve your result, also take +1 momentum after you reset.`
      },
      {
        description: `When you Secure an Advantage or Gather Information by carefully surveying the landscape or
        scouting ahead, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Swear an Iron Vow to safely guide someone on a perilous journey, you may reroll any dice.
        When you Fulfill Your Vow and mark experience, take +1 experience.`
      }
    ]
  },
  {
    title: 'Weapon Master',
    category: 'Path',
    introduction: `Once you Fulfill Your Vow (formidable or greater) in service to a seasoned warrior,
                    and Forge a Bond to train with them...`,
    abilities: [
      {
        description: `When you Secure an Advantage by sizing up your foe in a fight, or in a charged situation which
        may lead to a fight, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you study or train in a new weapon or technique, you may obtain and upgrade
        that combat talent for 1 fewer experience.`
      },
      {
        description: `When you Turn the Tide with a sudden change of weapon or technique, and your next move is a Strike,
        add +1 and inflict +2 harm on a strong hit.`
      }
    ]
  },
  {
    title: 'Wildblood',
    category: 'Path',
    abilities: [
      {
        description: `When you Face Danger, Secure an Advantage, or Gather Information using your knowledge of
        tracking, woodcraft, or woodland creatures, add +1.`
      },
      {
        description: `When you Face Danger or Secure an Advantage by hiding or sneaking in the woodlands,
        add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Make Camp in the woodlands, you may roll +wits (instead of +supply).
        If you do, you and your allies each choose 1 more option on a hit.`
      }
    ]
  },
  {
    title: 'Wright',
    category: 'Path',
    abilities: [
      {
        description: `When you Secure an Advantage by crafting a useful item using your specialty,
        or when you Face Danger to create or repair an item in a perilous situation, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `As above, and you may suffer -1 supply (after rolling) to add an additional +1.`
      },
      {
        description: `When you give the item you create as a gift to commemorate an important event or relationship,
        you may (one time only) reroll any dice when you Compel, Forge a Bond, or Test Your Bond.`
      }
    ]
  },
  {
    title: 'Archer',
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you Secure an Advantage by taking a moment to aim, choose your approach and add +1.
        • Trust your instincts: Roll +wits, and take +2 momentum on a strong hit.
        • Line up your shot: Roll +edge, and take +1 momentum on a hit.`
      },
      {
        description: `Once per fight, when you Strike or Clash, you may take extra shots and
        suffer -1 supply (decide before rolling). When you do, reroll any dice.
        On a hit, inflict +2 harm and take +1 momentum.`
      },
      {
        description: `When you Resupply by hunting, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Berserker',
    introduction: 'If you are clad only in animal pelts…',
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you Secure an Advantage or Compel by embodying your wild nature, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Strike or Clash by unleashing your rage (decide before rolling),
                    inflict +1 harm on a hit. Then, choose one.
                    • Push yourself: Endure Harm (1 harm).
                    • Lose yourself: Endure Stress (1 stress).`
      },
      {
        description:  `When you Endure Harm in a fight, and your health is above 0, you may let the pain inflame
        your wildness (decide before rolling). If you then score a strong hit and choose to embrace the pain,
         take +momentum equal to your remaining health. A weak hit counts as a miss.`
      }
    ]
  },
  {
    title: 'Brawler',
    introduction: `If you are unarmed or fighting with a non-deadly weapon...`,
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you Secure an Advantage +iron by engaging in close-quarters
        brawling (such as punching, tripping, or grappling), add +1.
        If you score a hit, you may also inflict 1 harm.`
      },
      {
        description: `When you use an unarmed attack or simple weapon to Strike with deadly intent, add +2 and
        inflict 2 harm on a hit (instead of 1). On a weak hit or miss, suffer -1
        momentum (in addition to any other outcome of the move).`
      },
      {
        description: `When you Face Danger or Clash against a brawling attack, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Cutthroat',
    introduction: 'If you wield a dagger or knife...',
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you are in position to Strike at an unsuspecting foe, choose one (before rolling).
        • Add +2 and take +1 momentum on a hit.
        • Inflict +2 harm on a hit.`
      },
      {
        description: `When you Compel someone at the point of your blade,
        or when you rely on your blade to Face Danger, add +1.`
      },
      {
        description: `Once per fight, when you Secure an Advantage +shadow by performing a feint or
        misdirection, reroll any dice and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Duelist',
    introduction: `If you wield a bladed weapon in each hand...`,
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you Strike or Clash, you may add +2. If you do (decide before rolling),
        inflict +1 harm on a strong hit and count a weak hit as a miss.`
      },
      {
        description: `Once per fight, when you Secure an Advantage +edge by making a bold display of your combat
        prowess, you may reroll any dice.`
      },
      {
        description: `When you Draw the Circle, choose one (before rolling).
        • Add +2.
        • Take +2 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Fletcher',
    category: 'Combat Talent',
    abilities: [
      {
        description: `When you Secure an Advantage by crafting arrows of fine quality, add +1. Then, take +1 supply or +1 momentum on a hit.`
      },
      {
        description: `When you Resupply by recovering or gathering arrows after a battle, add +2.`
      },
      {
        description: `When you craft a single arrow designated for a specific foe, envision the process and materials,
        and roll +wits. On a strong hit, take both. On a weak hit, choose one.
        • Seeker: When a shooter uses the arrow to Strike or Clash against this foe, reroll any dice (one time only).
        • Ravager: When a shooter uses the arrow to inflict harm against this foe, inflict +1d6 harm (one time only).`
      }
    ]
  },
  {
    title: 'Ironclad',
    category: 'Combat Talent',
    introduction: 'If you wear armor...',
    abilities: [
      {
        description: `When you equip or adjust your armor, choose one.
        • Lightly armored: When you Endure Harm in a fight, add +1 and take +1 momentum on a hit.
        • Geared for war: Mark encumbered. When you Endure Harm in a fight, add +2 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Long-Arm',
    category: 'Combat Talent',
    introduction: 'If you wield a staff...',
    abilities: [
      {
        description: `In your hands, a humble staff is a deadly weapon (2 harm). When you instead use it as a
        simple weapon (1 harm), you may Strike or Clash +edge (instead of iron).
        If you do, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Secure an Advantage +edge using your staff to disarm, trip, shove,
        or stun your foe, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Undertake a Journey and score a strong hit, or if you accompany an ally who scores a
        strong hit on that move, your staff provides support and comfort in your travels; take +1 momentum.`
      }
    ]
  },
  {
    title: 'Shield-Bearer',
    category: 'Combat Talent',
    introduction: 'If you wield a shield...',
    abilities: [
      {
        description: `When you Face Danger using your shield as cover, add +1. When you Clash in close quarters,
         take +1 momentum on a strong hit.`
      },
      {
        description: `When you paint your shield with a meaningful symbol, envision what you create.
        Then, if you Endure Stress as you face off against a fearsome foe, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When forced to Endure Harm in a fight, you may instead sacrifice your shield and ignore all harm.
        If you do, the shield is destroyed. Once per fight, you also take initiative when you sacrifice your shield to avoid harm.`
      }
    ]
  },
  {
    title: 'Skirmisher',
    category: 'Combat Talent',
    introduction: 'If you wield a spear...',
    abilities: [
      {
        description: `When you Face Danger by holding a foe at bay using your spear’s reach, roll +iron or +edge.
        If you score a hit, you may...
        • Iron: Strike (if you have initiative) or Clash now, and add +1.
        • Edge: Take +1 momentum.`
      },
      {
        description: `When you Strike in close combat, you may attempt to drive your spear home (decide before rolling).
        If you do, add +1 and inflict +2 harm on a hit. If you score a hit and the fight continues,
        Face Danger +iron to recover your spear.`
      },
      {
        description: `When you Secure an Advantage by bracing your spear against a charging foe, add +1
        and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Slinger',
    category: 'Combat Talent',
    introduction: 'If you wield a sling...',
    abilities: [
      {
        description: `When launched from a sling, a simple stone inflicts deadly harm (2 harm).
        When you Enter the Fray by barraging your foe with sling-bullets, inflict harm on a strong hit.`
      },
      {
        description: `When you Strike by launching stones at an advancing foe, you may choose one (before rolling).
        • Hold them back: Retain initiative on a weak hit, but inflict only 1 harm.
        • Hit them hard: Inflict +1 harm on a hit, but suffer -1 momentum.`
      },
      {
        description: `When you Secure an Advantage by preparing stones of a special quality or material, add +1.
        Then, take +1 momentum or +1 supply on a hit.`
      }
    ]
  },
  {
    title: 'Sunderer',
    category: 'Combat Talent',
    introduction: 'If you wield an axe...',
    abilities: [
      {
        description: `When you Strike or Clash in close quarters, you may suffer -1 momentum and inflict
        +1 harm on a hit (decide before rolling).`
      },
      {
        description: `When you have your axe in hand, and use the promise of violence to Compel or Secure
        an Advantage, add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you make a tribute to a fallen foe (formidable or greater) by carving a rune in
        the haft of your axe, roll +heart. On a strong hit, inflict +1d6 harm (one time only) when you Strike or Clash.
        On a weak hit, as above, but this death weighs on you; Endure Stress (2 stress).`
      }
    ]
  },
  {
    title: 'Sword Master',
    category: 'Combat Talent',
    introduction: 'If you wield a sword...',
    abilities: [
      {
        description: `When you Strike or Clash and burn momentum to improve your result, inflict +2 harm.
        If the fight continues, add +1 on your next move.`
      },
      {
        description: `When you Clash and score a strong hit, add +1 if you immediately follow with a Strike.`
      },
      {
        description: `When you Swear an Iron Vow by kneeling and grasping your sword’s blade, add +1 and take
        +1 momentum on a hit. If you let the edge draw blood from your hands,
        Endure Harm (1harm) in exchange for an additional +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Thunder-Bringer',
    category: 'Combat Talent',
    introduction: 'If you wield a mighty hammer...',
    abilities: [
      {
        description: `When you Face Danger, Secure an Advantage, or Compel by hitting or breaking an inanimate object,
        add +1 and take +1 momentum on a hit.`
      },
      {
        description: `When you Strike a foe to knock them back, stun them, or put them off balance,
        inflict 1 harm (instead of 2) and take +2 momentum on a hit. On a strong hit,
        you also create an opening and add +1 on your next move.`
      },
      {
        description: `When you Turn the Tide, you may Strike with all the fury and power you can muster.
        If you do (decide before rolling), you may reroll any dice and inflict
        +2 harm on a strong hit, but count a weak hit as a miss.`
      }
    ]
  },
  {
    title: 'Augur',
    category: 'Ritual',
    abilities: [
      {
        description: `When you summon a flock of crows and ask a single question, roll +wits.
        On a strong hit, you interpret their calls as a helpful omen.
        Envision the response (Ask the Oracle if unsure) and take +2 momentum. On a weak hit,
        the crows ignore your question and offer a clue to an unrelated problem or opportunity in this area.
        Envision what you learn (Ask the Oracle if unsure),and take +1 momentum.`
      },
      {
        description: `As above, and the crows will also help guide you on the proper path.
        On a hit, add +1 on the next segment when you Undertake a Journey.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Awakening',
    category: 'Ritual',
    abilities: [
      {
        description: `When you create a simulacrum, roll +heart. On a strong hit, your creation is
        given unnatural life. If it aids you as you make a move to assault or overcome an
        obstacle through strength, add +2. It has 3 health and suffers harm as appropriate,
        but is not a companion and may not be healed. At 0 health, it is dead. On a weak
        hit, as above, but if you roll a 1 on your action die when aided by your creation,
        you must Face Danger +heart to keep it from turning on you (as a formidable foe).`
      },
      {
        description: `Your simulacrum has 6 health.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Bind',
    category: 'Ritual',
    abilities: [
      {
        description: `When you wear an animal pelt and dance in moonlight, roll +wits. On a strong hit,
        you or an ally may wear the pelt and add +1 when making moves with the
        related stat (wolf-edge; bear- iron; deer-heart; fox-shadow; boar- wits).
        If the wearer rolls a 1 on their action die while making a move using the pelt, the magic is spent.
        On a weak hit, as above, but the wilds call as you dance; Endure Stress (2 stress).`
      },
      {
        description: `As above, and you may instead perform this ritual wearing the pelt of a beast.
        If you do, name the related stat and add +2 (instead of +1).`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Communion',
    category: 'Ritual',
    abilities: [
      {
        description: `When you surround the remains of a recently deceased intelligent creature with lit candles, and summon
        its spirit, roll +heart. Add +1 if you share a bond. On a strong hit, the spirit appears and you may converse
        for a few minutes. Make moves as appropriate (add +1). On a weak hit, as above, but the spirit also delivers
        troubling news unrelated to your purpose. Envision what it tells you (Ask the Oracle if unsure)
        and Endure Stress (1 stress).`
      },
      {
        description: `As above, and you may also commune with the long-dead.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Divination',
    category: 'Ritual',
    abilities: [
      {
        description: `When you take a drop of blood from a willing subject (not yourself) and cast the
        rune-carved stones, roll +heart. On a strong hit, you may read the runes to gain insight about
        the subject and people close to them, including information you and the subject have no knowledge of.
        If you use the reading to Gather Information, Compel, or Forge a Bond, add +1.
        On a weak hit, as above, but the runes reveal their secrets only with extra time and focus; suffer -2 momentum.`
      },
      {
        description: `As above, and your divination can also reveal information about the subject’s future.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Invoke',
    category: 'Ritual',
    abilities: [
      {
        description: `When you consume the mystical essence of your surroundings, roll +wits.
        On a strong hit, add the value of your action die to your essence track (max 6).
        You may then Secure an Advantage or Face Danger +essence to create minor mystical effects or illusions.
        If you do, suffer -1 essence and take +1 momentum on a hit. On a weak hit, as above, but capturing these energies is harrowing; Endure Stress (2 stress).`
      },
      {
        description: `You may Compel +essence (and suffer -1 essence) through a show of power.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 essence on a hit.`
      }
    ]
  },
  {
    title: 'Keen',
    category: 'Ritual',
    abilities: [
      {
        description: `When you hold a weapon and sing a keen for those it has killed, roll +heart.
        On a strong hit, the wielder inflicts +1 harm when they Strike or Clash. If they roll a 1 on their action die
        when making a move to inflict harm, the magic is spent. On a weak hit, as above, but the
        voices of those who were slain join in your song; Endure Stress (2 stress).`
      },
      {
        description: `As above, and the wielder may also (one time only) add +1 and take +2 momentum on a
        hit when they Draw the Circle, Enter the Fray, or Battle.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Leech',
    category: 'Ritual',
    abilities: [
      {
        description: `When you mark your hands or weapon with an intricate blood rune, roll +iron.
        On a strong hit, the rune thirsts for fresh blood. One time only, when you make a move to inflict harm,
        reroll any dice and inflict +2 harm on a hit.
        Then, for each point of harm inflicted, take +1 and allocate it as +health or +momentum.
        On a weak hit, as above, but this asset counts as a debility until the rune’s thirst is quenched.`
      },
      {
        description: `As above, and you may also touch an ally or companion and let them take
        any remaining points as +health or +momentum.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Light Bearer',
    category: 'Ritual',
    abilities: [
      {
        description: `When you focus on a source of light and capture its essence, roll +wits.
        On a strong hit, set your light track to +6. On a weak hit, make it +3.
        Then, when you make a move to overcome or navigate darkness, you may add +2 and suffer -1 light.`
      },
      {
        description: `You may use your light to Strike or Clash against a dark-dwelling foe.
        Choose the amount of light to unleash, and roll +light (instead of +iron or +edge).
        Suffer -light equal to that amount. On a hit, your harm is 1+your unleashed light.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Scry',
    category: 'Ritual',
    abilities: [
      {
        description: `When you look into flames to study a remote person or location, roll +shadow.
        You or someone with you must have knowledge of the target.
        On a strong hit, you may Gather Information through observation using +shadow or +wits. On a weak hit,
        as above, but the flames are hungry; choose one to sacrifice.
        • Your blood: Endure Harm (2 harm).
        • Something precious: Endure Stress (2 stress).
        • Provisions: Suffer -2 supply.`
      },
      {
        description: `As above, and you may instead study a past event.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Shadow-Walk',
    category: 'Ritual',
    abilities: [
      {
        description: `When you cloak yourself with the gossamer veil of the shadow realms, roll +shadow.
        On a strong hit, take +1 momentum. Then, reroll any dice (one time only) when you make a move by
        ambushing, hiding, or sneaking. On a weak hit, as above, but the shadows try to lead you astray.
        You must first Face Danger to find your way.`
      },
      {
        description: `As above, and you may also travel along the hidden paths of the shadow realms to
        Undertake a Journey using +shadow (instead of +wits). If you do,
        Endure Stress (1 stress) and mark progress twice on a strong hit.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Sway',
    category: 'Ritual',
    abilities: [
      {
        description: `When you speak a person’s name three times to the wind, roll +wits.
        On a strong hit, the wind whispers of this person’s need.
        Envision what you hear (Ask the Oracle if unsure). If you use this information or fulfill
        this need when you Compel them, you may reroll any dice (one time only).
        On a weak hit, as above, but this person’s need creates a troubling dilemma
        or complication; Endure Stress (1 stress).`
      },
      {
        description: `As above, and if you score a strong hit when you Compel, you may also reroll any
        dice (one time only) when you Gather Information from this person.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Talisman',
    category: 'Ritual',
    abilities: [
      {
        description: `When you fashion a charm, envision it and name the specific person or creature it protects against.
        Then roll +wits. On a strong hit, when the wearer opposes the target through a move, add +2.
        If a 1 is rolled on the action die while making a move using the charm, the magic is spent.
        On a weak hit, as above, but the wearer adds +1 when making a move (instead of +2).`
      },
      {
        description: `As above, and you may instead fashion a charm which aids the wearer against
        all supernatural threats, such as mystic rituals or horrors.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Tether',
    category: 'Ritual',
    abilities: [
      {
        description: `When you commune with the spirits of a place, roll +heart. If you share a bond with
        someone there, add +1. On a strong hit, you are tethered. When you Undertake
        a Journey to return, you may roll +spirit or +heart (instead of +wits), and take +1 momentum on a hit.
        When you Reach Your Destination, take +2 momentum on a strong hit. The tether is lost if you
        perform this ritual elsewhere, or when you Face Desolation. On a weak hit, as
        above, but the spirits reveal a disturbing aspect of the place; Endure Stress (2 stress).`
      },
      {
        description: `As above, and you may also reroll any dice when you Sojourn in the tethered place.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Totem',
    category: 'Ritual',
    abilities: [
      {
        description: `When you hold a totem of your animal or beast companion and focus on it,
        roll +heart. On a strong hit, you are bound together. Add +1 and take +1 momentum on a hit when you
        use a companion ability. If you roll a 1 on your action die when using a companion ability, the magic is spent.
        On a weak hit, as above, but creating this connection is unsettling; Endure Stress (1 stress).`
      },
      {
        description: `As above, and you may also perceive the world through your companion’s senses while
        you make moves aided by them (even when you are apart).`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Visage',
    category: 'Ritual',
    abilities: [
      {
        description: `When you paint yourself in blood and ash, roll +wits. On a strong hit, you may
        add +2 and take +1 momentum on a hit when you Secure an Advantage or Compel using fear or intimidation.
        If you roll a 1 on your action die when making a move aided by your visage, the magic is spent.
        On a weak hit, as above, but the blood must be your own; Endure Harm (2 harm).`
      },
      {
        description: `As above, and you may also add +1 when you Strike, Clash, or Battle.`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  },
  {
    title: 'Ward',
    category: 'Ritual',
    abilities: [
      {
        description: `When you walk a wide circle, sprinkling the ground with salt, roll +wits.
        On a strong hit, choose two. On a weak hit, chose one.
        • When a foe first crosses the boundary, take +1 momentum.
        • When you first inflict harm against a foe within the boundary, inflict +1 harm.
        • Your ward is ‘likely’ (Ask the Oracle) to trap a foe within the boundary.`
      },
      {
        description: `As above, and improve the effect of your ward (+2 momentum, +2 harm, and ‘almost certain’).`
      },
      {
        description: `When you perform this ritual, add +1 and take +1 momentum on a hit.`
      }
    ]
  }


]
