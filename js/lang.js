var language = {
    EN: {
        RELICS_NAMES: ["Ares Relic", "Yggdrasil Relic", "Hermes Relic", "Vulcan Relic", "No Relic"],
        THREATS: ["", "NORMAL", "ADVANCED", "SUPERIOR", "VETERAN", "ELITE", "MASTER", "LEGEND"],
        ARMORS_NAMES: {
            Normal: ['Tiny [ARMOR]', 'Cursed [ARMOR]', 'Ruined [ARMOR]', 'Damaged [ARMOR]', 'Unusable [ARMOR]', 'Rusty [ARMOR]', 'Weakened [ARMOR]', 'Broken [ARMOR]'],
            Common: ['Cheap [ARMOR]', 'Small [ARMOR]', 'Fragile [ARMOR]', 'Chipped [ARMOR]', 'Weak [ARMOR]', 'Used [ARMOR]', 'Battered [ARMOR]', 'Worn [ARMOR]'],
            Uncommon: ['Acceptable [ARMOR]', 'Big [ARMOR]', 'Expensive [ARMOR]', 'Luminous [ARMOR]', 'Undamaged [ARMOR]', 'Clean [ARMOR]', 'Basic [ARMOR]', 'Fresh [ARMOR]'],
            Rare: ['Nice [ARMOR]', 'Good [ARMOR]', 'Premium [ARMOR]', 'Resistant [ARMOR]', 'Strong [ARMOR]', 'Durable [ARMOR]', 'Polished [ARMOR]', 'Powerful [ARMOR]'],
            Epic: ['Master [ARMOR]', 'Expert [ARMOR]', 'Guardian [ARMOR]', 'Perfect [ARMOR]', 'Balanced [ARMOR]', 'Indestructible [ARMOR]', 'Advanced [ARMOR]', 'Shiny [ARMOR]'],
            Exotic: ['Infinite [ARMOR]', 'Magic [ARMOR]', 'Sacred [ARMOR]', 'Blessed [ARMOR]', 'Ancient [ARMOR]', '[ARMOR] of Alpha', 'Fantastic [ARMOR]', 'Incredible [ARMOR]'],
            Legendary: ['Unreal [ARMOR]', 'Eternal [ARMOR]', '[ARMOR] of Angels', '[ARMOR] of Legend', 'Holy [ARMOR]', 'Celestial [ARMOR]', 'Fairy [ARMOR]', '[ARMOR] of Destiny', 'Transcendent [ARMOR]']
        },
        WEAPONS_NAMES: {
            Normal: ['Tiny [WEAPON]', 'Cursed [WEAPON]', 'Ruined [WEAPON]', 'Damaged [WEAPON]', 'Unusable [WEAPON]', 'Rusty [WEAPON]', 'Weakened [WEAPON]', 'Broken [WEAPON]'],
            Common: ['Cheap [WEAPON]', 'Small [WEAPON]', 'Fragile [WEAPON]', 'Chipped [WEAPON]', 'Weak [WEAPON]', 'Used [WEAPON]', 'Battered [WEAPON]', 'Worn [WEAPON]'],
            Uncommon: ['Acceptable [WEAPON]', 'Big [WEAPON]', 'Expensive [WEAPON]', 'Luminous [WEAPON]', 'Undamaged [WEAPON]', 'Clean [WEAPON]', 'Basic [WEAPON]', 'Fresh [WEAPON]'],
            Rare: ['Nice [WEAPON]', 'Good [WEAPON]', 'Premium [WEAPON]', 'Sharp [WEAPON]', 'Resistant [WEAPON]', 'Durable [WEAPON]', 'Polished [WEAPON]', 'Powerful [WEAPON]'],
            Epic: ['Master [WEAPON]', 'Expert [WEAPON]', 'Guardian [WEAPON]', 'Perfect [WEAPON]', 'Balanced [WEAPON]', 'Indestructible [WEAPON]', 'Advanced [WEAPON]', 'Shiny [WEAPON]'],
            Exotic: ['Infinite [WEAPON]', 'Magic [WEAPON]', 'Sacred [WEAPON]', 'Blessed [WEAPON]', 'Ancient [WEAPON]', '[WEAPON] of Alpha', 'Fantastic [WEAPON]', 'Incredible [WEAPON]'],
            Divine: ['Unreal [WEAPON]', 'Eternal [WEAPON]', '[WEAPON] of Angels', '[WEAPON] of Legend', 'Holy [WEAPON]', 'Celestial [WEAPON]', 'Fairy [WEAPON]', '[WEAPON] of Destiny', 'Transcendent [WEAPON]']
        },
        ARMORS_TYPE: ["", "Helmet", "Breastplate", "Shield", "Boots"],
        WEAPONS_TYPE: ["Sword", "Dagger"],
        MISSIONS: {
            0: ['White Light', 'A white light dazzles you but you quickly understand that this place is not the Earth, no walls, no sky...<br> But blinding lights all around you.<br> It\'s time to wake up !'],
            1: ['Shadow Forest', 'You are now in an unknown forest... A dark and creepy forest with no one in sight.<br>You decide to leave that place right now, even at the risk of losing your life.'],
            2: ['Lost Path', 'You arrive at the end of the forest and discover a little path hidden behind a big tree.<br>There seems to be a light in the distance and perhaps finally some answers.'],
            3: ['Galarius City', 'You reach a city with many people from a variety of different races: humans, dwarves and even elves.<br>It seems like you might be able to find some help here... or maybe just someone who can tell you how to get back to your world.'],
            4: ['Endless mountain', 'One of the locals advises you to go north and reach the royal capital through the mountains...<br>So here you are in the so-called "endless" mountains.'],
            5: ['Dark Cave', 'You arrive at the entrance of a dark cave.<br>It seems narrow but it is much faster and less dangerous than the mountains.'],
            6: ['Empire Road', 'You finally reach the end of the cave, tired but in one piece.<br>You can already see a sprawling city at the end of the road.'],
            7: ['Imperium City', 'You arrive at the Capital; the king, having heard about your story, demands an immediate hearing.'],
            8: ['Central V', 'You discuss finding a way to return to your world with the king.<br>He informs you that the only way is through the Red Portal on the farm side of the nearby demon army.<br>You\'ll need to get there quickly before the demons swarm you!'],
            9: ['The Red Portal', 'The red portal is near and burns white-hot like the gates of hell.<br>Lacking any better options you head closer.'],
            10: ['Corrupted World', 'You have successfully passed through the portal... But where have you arrived?'],
            11: ['Corrupted Fortress', 'You see a huge fortress full of nothing but demons; you feel the need to cleanse this place.'],
            12: ['Corrupted Fortress - Basement', 'There is a door inside that leads downwards to another level; you feel the need to cleanse this place too.'],
            13: ['Corrupted Fortress - Core', 'On the final floor you find the Fortress Core, where the corruption started... Destroy it.'],
            14: ['The Black Portal', 'Just after you destroyed the Fortress Core another portal appears, this one black and cold as ice.<br><br><center>A new story begins.</center>'],
            15: ['The Black Portal II', 'As you move forward the passage becomes even darker and colder.<br>You can just make out a light far in the distance...'],
            16: ['Light of Elysia', 'Exiting the other side of the portal you land in a new world in the city of Elysia.<br>This world seems quite beautiful; why not explore it for awhile?'],
            17: ['Red Moon at Elysia', 'Elysia is lively, peaceful, and filled solely by humans as far as you can tell.<br>As you wander the city you hear a cry; when you arrive at the sound you see a man sucking someone\'s blood in the shadow of an alley... a vampire!'],
            18: ['Vampire Manor', 'One of the vampires confesses the location of a vampire hideout. Surely you will find more information there.'],
            19: ['Funeral Chamber of the Manor', 'This seems to be the right place: it\'s full of vampires and one of them emits a strange power.'],
            20: ['The New World', 'The city is now at peace. You head towards the Red River as you continue to explore this new world.'],
            21: ['Red River', 'During your daily hunt you find a merchant who keeps repeating that the vampire attack in the city was only the beginning.<br>He also shares a rumor: the vampire\'s castle is said to be hidden somewhere in the mountains.'],
            22: ['The Mountains', 'After searching for five days in the mountains you find a bridge filled with corpses.<br>Without any hesitation you start to cross the bridge into vampire territory.'],
            23: ['Immortal Bridge', 'These vampires seem more difficult to kill than the ones in the city.<br>An enormous castle looms at the end of the bridge so you continue to fight through them.'],
            24: ['Vampire Castle', 'This is it: The Vampire Castle.<br>Now that you have arrived it\'s time to cleanse this filthy place.'],
            25: ['Vampire Castle - Tower', 'You discover that one of the towers in the castle houses many powerful vampires.<br>This may take longer than you had hoped to clean up.'],
            26: ['Vampire Castle - Core', 'You have reached the Castle Heart. By destroying the Heart this world has nearly reached the peace.<br>But first you\'ll need to kill the remaining vampires that guard it!'],
        },
        BOSSES_NAMES: [
            'Pure Soul',
            'Fairy Queen',
            'Alpha Wolf',
            'Huge Rat',
            'Poison Golem',
            'Pink Slime',
            'Albino Spider',
            'Black Mage',
            'Ghoul',
            'Poltergeist',
            'Fallen Knight',
            'Demon Lord',
            'Powerful Skeleton',
            "Jack-o'-lantern",
            'Vampire Lord',
            'Big Fish-Man',
            'Vampire Lord',
            'Vampire King'
        ],
        ENEMIES_NAMES: [
            ["Kind Soul", "Evil Soul"],
            ["Fire Fairy", "Water Fairy", "Grass Fairy"],
            ["Wolf", " White Wolf", "African Wolf"],
            ["Grey Rat", "Brown Rat"],
            ["Stone Golem", "Water Golem"],
            ["Blue Slime", "Black Slime", "Yellow Slime"],
            ["Black Spider", "Red Spider"],
            ["Fire Mage", "Water Mage"],
            ["Zombie", "Burning Zombie"],
            ["Ghost", "Crying Ghost"],
            ["White Knight", "Red Knight"],
            ["Minor Rank Demon", "Middle Rank Demon", "Higher Rank Demon"],
            ["Skeleton", "Decrepit Skeleton", "Burnt Skeleton"],
            ["Jack-o'-lantern", "Jack-o'-lantern"],
            ["Vampire"],
            ["Fish-Man", "Fish-Man", "Fish-Man"],
            ["Vampire", "Noble Vampire"],
            ["Vampire Lord", "Noble Vampire"]
        ],
        LOCATIONS: {
            0: "The White Light",
            1: "The Shadow Forest",
            2: "The Lost Path",
            3: "Galarius City",
            4: "The Endless Mountain",
            5: "The Dark Cave",
            6: "Empire Road",
            7: "Imperium City",
            8: "Central V",
            9: "The Red Portal",
            10: "The Corrupted World",
            11: "The Corrupted Fortress",
            12: "The Black Portal",
            13: "Elysia City",
            14: "Vampire Manor",
            15: "The Red River",
            16: "The Immortal Bridge",
            17: "The Vampire Castle",
        },
        ACTIONS: {
            Main: "Main attack",
            Special: "Special attack",
            Specials: "Specials attacks",
            Cover: "Take cover",
            RunAway: "Run away",
            LaunchMission: "Launch mission",
            CancelMission: "Cancel mission",
            Travel: "Travel here",
            Story: "Story",
        },
        TASKS: {
            Exploration: ["Exploration", "of [LOCATION]"],
            Mission: ["Mission", "Defeat [COUNT] enemies in [LOCATION]", "Defeat the [CLASS] of [LOCATION]"],
            Fortress: ["Fortress", "Clear [LOCATION] ([COUNT] left.)"],
        },
        MENUS: {
            Inventory: "Inventory",
            Dimension: "Dimension",
            Statistics: "Statistics",
            Leaderboard: "Leaderboard",
            Settings: "Settings",
            Credits: "Credits",
            Missions: "Missions",
            Exploration: "Exploration",
            Guild: "Guild",
        },
        STATUS: {
            NotStarted: "Not Started",
            Incomplete: "Incomplete",
            InProgress: "In Progress",
            Complete: "Complete",
        },
        QUALITIES: {
            Normal: "Normal",
            Common: "Common",
            Uncommon: "Uncommon",
            Rare: "Rare",
            Epic: "Epic",
            Exotic: "Exotic",
            Legendary: "Legendary",
            Divine: "Divine",
        },
        MISC: {
            Weapon: "Weapon",
            Weapons: "Weapons",
            Armor: "Armor",
            Armors: "Armors",
            PowerGem: "Power Gem",
            PowerGems: "Power Gems",
            LifeGem: "Life Gem",
            LifeGems: "Life Gems",
            Relic: "Relique",
            Relics: "Reliques",
            Recovering: "Recovering",
            Missed: "MISSED",
            Level: "Level",
            Score: "Score",
            LevelUp: "LEVEL UP",
            Respawning: "Respawning in [COUNT] [SECONDS]",
            Hour: "hour",
            Minute: "minute",
            Second: "second",
            Seconds: "seconds",
            CurrentRatio: "Current Ratio",
            LostExp: "You lost a part of your EXP.",
            FortressFailed: "FORTRESS FAILED",
            FortressFailedMessage: "You failed to clear the fortress.",
            DefeatedBy: "You were defeated by the [ENEMY] !",
            InventoryFull: "Inventory full, you can't recover any new item.",
            Defeated: "[ENEMY] defeated !",
            YouDefeated: "You have defeated [COUNT] [CLASS] enemies.",
            EXP: "EXP",
            SpecialDropped: "[COUNT] Special Attack",
            SpecialsDropped: "[COUNT] Special Attacks",
            MainWeapon: "Main Weapon",
            SpecialWeapon: "Special Weapon",
            NextArmorUnlock: "Next armor piece unlocked at level [LEVEL].",
            Equipment: "Equipment",
            LootItem: "1 [QUALITY] equipment ",
            LootRelic: "1 [QUALITY] relic ",
            LootGem: "1 [QUALITY] gem ",
            Lv: "Lv.",
            ThrowAway: "Throw Away",
            Cover: "Next cover in [COUNT].",
            Retreat: "Next retreat in [COUNT].",
            MaxLevelForArea: "You've reached the maximum level for this area, please check the next available missions.",
            Titles: "Titles",
            Bank: "Bank",
            Shop: "Shop"
        },
        FORMAT: {
            ENEMIES: "[CLASS] [NAME]"
        },
        STATS: {
            Identification: "Identification",
            Ranking: "Ranking",
            TimePlayed: "Time Played",
            CurrentLevel: "Current Level",
            Class: "Class",
            TotalDamage: "Total Damage Dealt",
            TotalLife: "Total Maximum Life",
            EquipmentScore: "Equipment Score",
            DimensionalDiffculty: "Dimensional Diffculty",
            FortressesDefeated: "Fortresses Defeated",
            MainWeaponDamage: "Main Weapon Damage",
            SpecialWeaponDamage: "Special Weapon Damage",
            HelmetBaseLife: "Helmet Base Life",
            ArmorBaseLife: "Armor Base Life",
            ShieldBaseLife: "Shield Base Life",
            BootsBaseLife: "Boots Base Life",
            GameVersion: "Game Version",
            Defeated: "[COUNT] Defeated",
            Kills: "[CLASS] Kills",
            Ratio: "Ratio (K/D)",
            TotalKills: "Total Kills",
            TotalDeaths: "Total Deaths",
        },
        RELICS: [
            "",
            "Power bonus of [BONUS]",
            "Life bonus of [BONUS]",
            "Minimal drop quality [BONUS]",
            "Max Score +[BONUS]",
        ],
        REWARDS: [
        "Currently set to <span class='pw green'>show all rewards</span>.", 
        "Currently set to <span class='pw red'>hide all rewards</span>.",
        "Currently set to <span class='pw yellow'>show only rewards with loot</span>."
        ]
    },
    FR: {
        RELICS_NAMES: ["Relique d'Arès", "Relique d'Yggdrasil", "Relique d'Hermès", "Relique de Vulcain", "Pas de Relique"],
        THREATS: ["", "NORMAL", "AVANCÉ", "SUPÉRIEUR", "VÉTÉRAN", "ÉLITE", "MAÎTRE", "LÉGENDE"],
        ARMORS_NAMES: {
            Normal: ['Minuscule [ARMOR]', '[ARMOR] Maudit', '[ARMOR] Ruiné', '[ARMOR] Endommagé', '[ARMOR] Inutilisable', '[ARMOR] Rouillé', '[ARMOR] Merdique', '[ARMOR] Brisé'],
            Common: ['[ARMOR] Rayé', '[ARMOR] Abimé', '[ARMOR] Fragile', '[ARMOR] Ébréché', 'Faible [ARMOR]', '[ARMOR] Utilisé', '[ARMOR] Usé', '[ARMOR] Cabossé'],
            Uncommon: ['[ARMOR] Acceptable', 'Grand [ARMOR]', '[ARMOR] Onéreux', '[ARMOR] Lumineux', '[ARMOR] Intacte', '[ARMOR] Propre', '[ARMOR] Basique', '[ARMOR] Neuf'],
            Rare: ['[ARMOR] Superbe', '[ARMOR] Immuable', '[ARMOR] Premium', '[ARMOR] Résistant', '[ARMOR] Solide', '[ARMOR] Durable', '[ARMOR] Brillant', '[ARMOR] Puissant'],
            Epic: ['[ARMOR] de Maître', '[ARMOR] d\'Expert', '[ARMOR] de Gardien', '[ARMOR] Parfait', '[ARMOR] Reluisant', '[ARMOR] Indestructible', '[ARMOR] Avancé', '[ARMOR] Brillant'],
            Exotic: ['[ARMOR] Infini', '[ARMOR] Magique', '[ARMOR] Sacré', '[ARMOR] Béni', '[ARMOR] Reliquat', '[ARMOR] d\'Alpha', '[ARMOR] Fantastique', '[ARMOR] Incroyable'],
            Legendary: ['[ARMOR] Irréel', '[ARMOR] Éternel', '[ARMOR] des Anges', '[ARMOR] de Légende', '[ARMOR] Saint', '[ARMOR] Céleste', '[ARMOR] Féérique', '[ARMOR] de la Destinée', '[ARMOR] de la Transcendance']
        },
        WEAPONS_NAMES: {
            Normal: ['[WEAPON] Minuscule', '[WEAPON] Maudite', '[WEAPON] Ruinée', '[WEAPON] Endommagée', '[WEAPON] Inutilisable', '[WEAPON] Rouillée', '[WEAPON] Merdique', '[WEAPON] Brisée'],
            Common: ['[WEAPON] Rayée', '[WEAPON] Abimée', '[WEAPON] Fragile', '[WEAPON] Émoussée', 'Faible [WEAPON]', '[WEAPON] d\'Occasion', '[WEAPON] Usée', '[WEAPON] Amochée'],
            Uncommon: ['[WEAPON] Acceptable', 'Grande [WEAPON]', '[WEAPON] Onéreuse', '[WEAPON] Résistante', '[WEAPON] Intacte', '[WEAPON] Propre', '[WEAPON] Basique', '[WEAPON] Neuve'],
            Rare: ['Bonne [WEAPON]', '[WEAPON] Immuable', '[WEAPON] Premium', '[WEAPON] Résistante', '[WEAPON] Tranchante', '[WEAPON] Durable', '[WEAPON] Brillante', '[WEAPON] Puissante'],
            Epic: ['[WEAPON] de Maître', '[WEAPON] d\'Expert', '[WEAPON] de Gardien', '[WEAPON] Parfaite', '[WEAPON] Équilibrée', '[WEAPON] Indestructible', '[WEAPON] Avancée', '[WEAPON] Brillante'],
            Exotic: ['[WEAPON] Infinie', '[WEAPON] Magique', '[WEAPON] Sacrée', '[WEAPON] Bénie', '[WEAPON] Reliquate', '[WEAPON] d\'Alpha', '[WEAPON] Fantastique', '[WEAPON] Incroyable'],
            Legendary: ['[WEAPON] Irréelle', '[WEAPON] Éternelle', '[WEAPON] des Anges', '[WEAPON] de Légende', 'Sainte [WEAPON]', '[WEAPON] Céleste', '[WEAPON] Féérique', '[WEAPON] de la Destinée', '[WEAPON] de la Transcendance']
        },
        ARMORS_TYPE: ["", "Casque", "Cuirasse", "Bouclier", "Bottes"],
        WEAPONS_TYPE: ["Épée", "Dague"],
        MISSIONS: {
            0: ['Lumière Blanche', 'Une lumière blanche vous éblouit mais vous comprennez très vite que cet endroit n\'est pas la Terre, aucun murs, aucun ciel...<br> Mais des lumières aveuglantes partout autour de vous.<br> Il est temps de se réveiller.'],
            1: ['Forêt des Ombres', 'Vous êtes maintenant dans une forêt inconnue... Une forêt sombre et glauque sans personne en vue.<br>Vous décidez de vite partir de là, au risque d\'y perdre la vie.'],
            2: ['Chemin Perdu', 'Vous arrivez au bout de la forêt et découvrez un petit chemin caché derrière un grand arbre.<br>Il semble y avoir une lumière au loin et peut-être enfin des réponses.'],
            3: ['Ville de Galarius', 'Vous arrivez dans une ville où vivent de nombreuses personnes de races différentes : Humains, Nains et même des Elfes.<br>Il semble que vous puissiez trouver une aide ici... ou peut-être simplement une personne qui puisse vous dire comment retourner dans votre monde.'],
            4: ['Montagne sans Fin', 'Un des habitants vous conseille de partir vers le nord et de rejoindre la capitale royale en passant par les montagnes.<br>Vous voilà donc dans les montagnes dites "sans fin".'],
            5: ['Grotte Obscure', 'Vous arrivez à l\'entrée d\'une obscure grotte.<br>Elle semble étroite mais elle est beaucoup plus rapide et moins dangereuse que les montagnes.'],
            6: ['Route Impériale', 'Vous arrivez enfin au bout de la grotte, fatigués mais en un seul morceau.<br>Vous apercevez déjà une ville immense au bout de la route.'],
            7: ['Ville d\'Imperium', 'Vous arrivez à la capitale; Le Roi, ayant entendu parler de votre histoire, réclame une audience immédiate.'],
            8: ['Central V', 'Vous discutez avec le roi pour trouver un moyen de retourner dans votre monde. <br>Il vous informe que le seul moyen est de passer par le portail rouge du côté de la ferme de l\'armée des démons à proximité.<br>Vous devrez vous y rendre rapidement avant que les démons ne vous assaillent !'],
            9: ['Portail Rouge', 'Le portail rouge est proche et brûle à blanc comme les portes de l\'enfer. <br>Sans meilleure option, vous vous rapprochez.'],
            10: ['Monde Corrompu', 'Vous avez réussi à franchir le portail... Mais où donc êtes-vous arrivé ?'],
            11: ['Forteresse Corrompue', 'Vous voyez une immense forteresse remplie uniquement de démons; Vous ressentez le besoin de purifier cet endroit.'],
            12: ['Forteresse Corrompue - Sous-sol', 'Il y a une porte qui donne accès à un autre niveau ; vous ressentez le besoin de nettoyer cet endroit également.'],
            13: ['Forteresse Corrompue - Noyau', 'Au dernier étage, vous trouvez le noyau de la forteresse, là d\'où la corruption commence... Détruisez-le.'],
            14: ['Portail Noir', 'Juste après avoir détruit le noyau de la forteresse, un autre portail apparaît, celui-ci noir et froid comme la glace.<br><br><center>Une nouvelle histoire commence.</center>'],
            15: ['Portail Noir II', 'En avançant, le passage devient encore plus obscur et froid. On peut seulement distinguer une lumière au loin...'],
            16: ['Lumière d\'Elysia', 'En sortant de l\'autre côté du portail, vous atterrissez dans un nouveau monde, dans la ville d\'Elysia.<br>Ce monde semble relativement beau; pourquoi ne pas l\'explorer un peu ?'],
            17: ['Lune Rouge à Elysia', 'Elysia est une ville vivante, paisible et remplie uniquement d\'humains pour autant que vous puissiez en témoigner.<br>En parcourant la ville, vous entendez un cri; En arrivant au son, vous voyez un homme sucer le sang de quelqu\'un dans l\'ombre d\'une ruelle... Un Vampire !'],
            18: ['Manoir des Vampire', 'L\'un des vampires indique l\'emplacement d\'un repaire de vampires. Vous y trouverez sûrement plus d\'informations.'],
            19: ['Chambre funéraire du Manoir', 'Il semble que ce soit le bon endroit : Il regorge de vampires et l\'un d\'entre eux émet un étrange pouvoir.'],
            20: ['Le Nouveau Monde', 'La cité est maintenant en paix. Vous allez donc en direction d\'une Rivière Rouge tout en continuant à explorer ce nouveau monde.'],
            21: ['La Rivière Rouge', 'Au cours de votre chasse quotidienne, vous trouvez un marchand qui ne cesse de répéter que l\'attaque de vampires dans la cité n\'était que le début.<br>Il partage également une rumeur : Le château du vampire serait caché quelque part dans les montagnes.'],
            22: ['Les Montagnes', "Après avoir cherché pendant cinq jours dans les montagnes, vous trouvez un pont rempli de cadavres.<br>Sans aucune hésitation, vous commencez à emprunter le pont pour accéder au territoire des vampires."],
            23: ['Pont Immortel', "Ces vampires semblent plus difficiles à tuer que ceux de la cité.<br>Un énorme château se profile au bout du pont, vous continuez donc à vous battre pour le franchir."],
            24: ['Château des Vampires', 'C\'est ici : Le Château des Vampires. Puisque vous êtes arrivés, il est temps de purifier cet endroit répugnant !'],
            25: ['Château des Vampires - Tour', 'Vous découvrez qu\'une des tours du château abrite de nombreux et puissants Vampires.<br>Cela va prendre plus de temps que vous ne le pensiez pour faire le ménage.'],
            26: ['Château des Vampires - Noyau', 'Vous avez atteint le noyau; en détruisant celui-ci, ce monde aura presque enfin atteint la paix.<br>Mais d\'abord, vous devrez tuer les vampires qui le protège encore !'],
        },
        BOSSES_NAMES: [
            'Âme Pure',
            'Reine des Fées',
            'Loup Alpha',
            'Énorme Rat',
            'Golem de Poison',
            'Slime Rose',
            'Araignée Albinos',
            'Mage Noir',
            'Goule',
            'Esprit Frappeur',
            'Chelalier Déchu',
            'Seigneur Démon',
            'Puissant Squelette',
            "Citrouille d'Halloween",
            'Seigneur Vampire',
            'Grand Homme-poisson',
            'Seigneur Vampire',
            'Roi Vampire'
        ],
        ENEMIES_NAMES: [
            ["Âme Passive", "Âme Mauvaise"],
            ["Fée de Feu", "Fée de l'Eau", "Fée de la Terre"],
            ["Loup", "Loup Blanc", "Loup d'Afrique"],
            ["Rat Gris", "Rat Marron"],
            ["Golem de Pierre", "Golem de l'Eau"],
            ["Slime Bleu", "Slime Noir", "Slime Jaune"],
            ["Araignée Noire", "Araignée Rouge"],
            ["Mage de Feu", "Mage de l'Eau"],
            ["Zombie", "Zombie Ardent"],
            ["Fantome", "Fantome en Pleure"],
            ["Chevalier Blanc", "Chevalier Rouge"],
            ["Démon de Rang Mineur", "Démon de Rang Moyen", "Démon de Rang Superieur"],
            ["Squelette", "Squelette Délabrer", "Squelette Ardent"],
            ["Citrouille d'Halloween", "Citrouille d'Halloween"],
            ["Vampire"],
            ["Homme-poisson", "Homme-poisson", "Homme-poisson"],
            ["Vampire", "Vampire Noble"],
            ["Seigneur Vampire", "Vampire Noble"]
        ],
        LOCATIONS: {
            0: "La Lumière Blanche",
            1: "La Forêt des Ombres",
            2: "Le Chemin Perdu",
            3: "La Ville de Galarius",
            4: "La Montagne sans Fin",
            5: "La Grotte Obscure",
            6: "La Route Impériale",
            7: "La Ville d'Imperium",
            8: "Le Central V",
            9: "Le Portail Rouge",
            10: "Le Monde Corrompu",
            11: "La Forteresse Corrompue",
            12: "Le portail Noir",
            13: "La Ville d'Elysia",
            14: "Le Manoir des Vampires",
            15: "La Rivière Rouge",
            16: "Le Pont Immortel",
            17: "Le Château des Vampires",
        },
        ACTIONS: {
            Main: "Attaque principale",
            Special: "Attaque spéciale",
            Specials: "Attaques spéciales",
            Cover: "Se mettre à couvert",
            RunAway: "Fuir",
            LaunchMission: "Lancer la mission",
            CancelMission: "Annuler la mission",
            Travel: "Voyager ici",
            Story: "Histoire",
        },
        TASKS: {
            Exploration: ["Exploration", "de [LOCATION]"],
            Mission: ["Mission", "Battre [COUNT] ennemis dans [LOCATION]", "Battre le [CLASS] de [LOCATION]"],
            Fortress: ["Forteresse", "Nettoyer [LOCATION] ([COUNT] ennemis restants.)"],
        },
        MENUS: {
            Inventory: "Inventaire",
            Dimension: "Dimension",
            Statistics: "Statistiques",
            Leaderboard: "Classement",
            Settings: "Paramètres",
            Credits: "Crédits",
            Missions: "Missions",
            Exploration: "Exploration",
            Guild: "Guilde",
        },
        STATUS: {
            NotStarted: "Non commencée",
            Incomplete: "Non terminée",
            InProgress: "En cours",
            Complete: "Terminée",
        },
        QUALITIES: {
            Normal: "Normal",
            Common: "Commun",
            Uncommon: "Non Commun",
            Rare: "Rare",
            Epic: "Epique",
            Exotic: "Exotique",
            Legendary: "Légendaire",
            Divine: "Divin",
        },
        MISC: {
            Weapon: "Arme",
            Weapons: "Armes",
            Armor: "Armure",
            Armors: "Armures",
            PowerGem: "Gemme de Puissance",
            PowerGems: "Gemmes de Puissance",
            LifeGem: "Gemme de Vie",
            LifeGems: "Gemmes de Vie",
            Relic: "Relique",
            Relics: "Reliques",
            Recovering: "Récupération",
            Missed: "RATÉ",
            Level: "Niveau",
            Score: "Score",
            LevelUp: "NIVEAU SUPÉRIEUR",
            Respawning: "Réapparition dans [COUNT] [SECONDS]",
            Hour: "heure",
            Minute: "minute",
            Second: "seconde",
            Seconds: "secondes",
            CurrentRatio: "Ratio actuel",
            LostExp: "Vous avez perdu une partie de votre expérience.",
            FortressFailed: "FORTERESSE ÉCHOUÉE",
            FortressFailedMessage: "Vous n'avez pas réussi à nettoyer la forteresse.",
            DefeatedBy: "Vous avez été vaincu par [ENEMY] !",
            InventoryFull: "Inventaire plein, vous ne pouvez pas récupérer plus d'objets.",
            Defeated: "[ENEMY] vaincu !",
            YouDefeated: "Vous avez vaincu [COUNT] ennemis de classe [CLASS].",
            EXP: "EXP",
            SpecialDropped: "[COUNT] Attaque Spéciale",
            SpecialsDropped: "[COUNT] Attaques Spéciales",
            MainWeapon: "Arme Principale",
            SpecialWeapon: "Arme Spéciale",
            NextArmorUnlock: "Prochaine pièce d'armure débloquée au niveau [LEVEL].",
            Equipment: "Équipement",
            LootItem: "1 équipement [QUALITY]",
            LootRelic: "1 relique [QUALITY]",
            LootGem: "1 gemme [QUALITY]",
            Lv: "Niv.",
            ThrowAway: "Jeter",
            Cover: "Prochaine couverture dans [COUNT].",
            Retreat: "Prochaine fuite dans [COUNT].",
            MaxLevelForArea: "Vous avez atteint le niveau maximal pour cette zone, veuillez regarder les missions disponibles.",
            Titles: "Titres",
            Bank: "Banque",
            Shop: "Boutique"
        },
        FORMAT: {
            ENEMIES: "[NAME] [CLASS]",
        },
        STATS: {
            Identification: "Pseudo",
            Ranking: "Classement",
            TimePlayed: "Temps de Jeu",
            CurrentLevel: "Niveau Actuel",
            Class: "Classe",
            TotalDamage: "Total de Dégats Infligés",
            TotalLife: "Total de Vie Maximale",
            EquipmentScore: "Score d'Équipement",
            DimensionalDiffculty: "Difficulté Dimensionnelle",
            FortressesDefeated: "Forteresses Vaincues",
            MainWeaponDamage: "Dégats de l'Arme Principale",
            SpecialWeaponDamage: "Dégats de l'Arme Spéciale",
            HelmetBaseLife: "Vie de Base du Casque",
            ArmorBaseLife: "Vie de Base de l'Armure",
            ShieldBaseLife: "Vie de Base du Bouclier",
            BootsBaseLife: "Vie de Base des Bottes",
            GameVersion: "Version du Jeu",
            Defeated: "[COUNT] Vaincus",
            Kills: "[CLASS] Tués",
            Ratio: "Ratio (É/M)",
            TotalKills: "Total de Tués",
            TotalDeaths: "Total de Morts",
        },
        RELICS: [
            "",
            "Bonus de puissance de [BONUS]",
            "Bonus de vie de [BONUS]",
            "Qualité minimale des objets [BONUS]",
            "Score maximal +[BONUS]",
        ],
        REWARDS: [
        "Actuellement définis pour <span class='pw green'>afficher toutes les récompenses</span>.",
        "Actuellement définis pour <span class='pw red'>cacher toutes les récompenses</span>.",
        "Actuellement définis pour <span class='pw yellow'>n'afficher que les récompenses avec du butin</span>."
        ]
    }
};