export interface Asset {
  title: string,
  category: string,
  abilities: Ability[]
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
  }
]
