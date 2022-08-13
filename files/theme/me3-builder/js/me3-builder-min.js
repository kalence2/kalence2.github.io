(function () {
    /*
     Copyright 2013
    */
    var a, b = a = a || {}; 
    b.ij = "Alliance Infiltration Unit"; 
    b.be = "Asari"; 
    b.Oj = "Asari Huntress"; 
    b.ce = "Asari Justicar"; 
    b.Rj = "Asari Valkyrie"; 
    b.gk = "Awakened Collector"; 
    b.ge = "Batarian"; 
    b.sk = "Batarian Brawler"; 
    b.Bk = "Batarian Slasher"; 
    b.Dk = "Battlefield 3"; 
    b.Bl = "Cabal"; 
    b.ve = "Drell"; 
    b.we = "Drell Assassin"; 
    b.xg = "Ex-Cerberus"; 
    b.Ua = "Geth"; 
    b.rp = "Geth Trooper"; 
    b.Lg = "Geth Juggernaut"; 
    b.dc = "Human Male"; 
    b.cc = "Human Female"; 
    b.vd = "Krogan";
    b.dr = "Krogan Shaman";
    b.kh = "Krogan Warlord";
    b.oh = "N7 Demolisher";
    b.Ys = "N7 Destroyer";
    b.ph = "N7 Fury";
    b.qh = "N7 Paladin";
    b.rh = "N7 Shadow";
    b.sh = "N7 Slayer";
    b.Ze = "Quarian Female";
    b.yh = "Quarian Male";
    b.Xu = "Quarian Marksman";
    b.mf = "Salarian";
    b.bA = "Talon Mercenary";
    b.vf = "Turian";
    b.rA = "Turian Ghost";
    b.sA = "Turian Havoc";
    b.tA = "Turian Saboteur";
    b.Bf = "Volus";
    b.dC = "Volus Mercenary";
    b.eC = "Volus Protector";
    b.Cf = "Vorcha";
    b.iC = "Vorcha Hunter";
    b.Kj = "Asari Adept";
    b.Sj = "Asari Vanguard";
    b.Ak = "Batarian Sentinel";
    b.Ck = "Batarian Soldier";
    b.Ek = "Battlefield 3 Soldier";
    b.pn = "Drell Adept";
    b.sn = "Drell Vanguard";
    b.$n = "Ex-Cerberus Adept";
    b.ao = "Ex-Cerberus Vanguard";
    b.dp = "Geth Engineer";
    b.ep = "Geth Infiltrator";
    b.kq = "Human Female Adept";
    b.lq = "Human Female Engineer";
    b.mq = "Human Female Infiltrator";
    b.nq = "Human Female Sentinel";
    b.oq = "Human Female Soldier";
    b.pq = "Human Female Vanguard";
    b.qq = "Human Male Adept";
    b.rq = "Human Male Engineer";
    b.sq = "Human Male Infiltrator";
    b.tq = "Human Male Sentinel";
    b.uq = "Human Male Soldier";
    b.vq = "Human Male Vanguard";
    b.br = "Krogan Battlemaster";
    b.cr = "Krogan Sentinel";
    b.er = "Krogan Soldier";
    b.Tu = "Quarian Female Engineer";
    b.Uu = "Quarian Female Infiltrator";
    b.Vu = "Quarian Male Engineer";
    b.Wu = "Quarian Male Infiltrator";
    b.pw = "Salarian Engineer";
    b.qw = "Salarian Infiltrator";
    b.qA = "Turian Cabal";
    b.uA = "Turian Sentinel";
    b.vA = "Turian Soldier";
    b.bC = "Volus Adept";
    b.cC = "Volus Engineer";
    b.mC = "Vorcha Sentinel";
    b.nC = "Vorcha Soldier";
    b.zA = "Select to activate/deactivate power.";
    b.AA = "Adept";
    b.oc = "Ammo";
    b.BA = "Ammo\nBonus";
    b.CA = "Ammo Damage";
    b.DA = "Armor\nBonus";
    b.EA = "Armor Piercing";
    b.fi = "Armor Weakening";
    b.FA = "Assault Rifle";
    b.GA = "Assault Rifle Damage";
    b.gi = "Assault Rifle Weight";
    b.HA = "Assault Rifles";
    b.hi = "Barrier";
    b.Wc = "Bonuses";
    b.IA = "Capacity";
    b.wf = "Charged Damage";
    b.JA = "Consumable rank";
    b.WC = "Damage";
    b.KA = 'damage to <span class="armor">armor</span>';
    b.LA = 'damage to <span class="barrier">barriers</span>';
    b.MA = 'damage to <span class="health">health</span>';
    b.NA = 'damage to <span class="shield">shields</span>';
    b.xf = "Done";
    b.yf = "empty";
    b.zf = "Empty";
    b.QA = "Engineer";
    b.RA = "Equip";
    b.SA = "Equipment: Ammo";
    b.TA = "Equipment: Armor";
    b.UA = "Equipment: Gear";
    b.VA = "Equipment: Weapon";
    b.WA = "This is your equipped weapon.\n\nOnly mods from this weapon will apply power and melee bonuses.";
    b.XA = "Gear\nBonus";
    b.YA = "Gear rank";
    b.ZA = "Grenades";
    b.pc = "Headshot";
    b.$A = "Health";
    b.aB = "Heavy Melee Damage";
    b.bB = "Heavy Pistols";
    b.cB = "Infiltrator";
    b.dB = "Infinite";
    b.eB = "Magazine";
    b.fB = "Melee";
    b.gB = "Melee Damage";
    b.hB = "Mod 1";
    b.iB = "Mod 2";
    b.Xc = "No bonuses applied.";
    b.qc = "Normal";
    b.jB = "Pistol";
    b.kB = "Pistol Damage";
    b.ii = "Pistol Weight";
    b.lB = "Points available";
    b.mB = "Power Damage";
    b.nB = "Power Recharge";
    b.ji = "Primary Weapon";
    b.oB = "Rare";
    b.pB = "Reset all powers.";
    b.Af = "Resistances";
    b.li = "Secondary Weapon";
    b.tB = "Select Character";
    b.uB = "You must first select a weapon.";
    b.vB = "Sentinel";
    b.wB = "Shield";
    b.xB = "Shield Recharge";
    b.yB = "If not destroyed, shields recharge after {0} seconds.";
    b.zB = "Shotgun";
    b.AB = "Shotgun Damage";
    b.mi = "Shotgun Weight";
    b.BB = "Shotguns";
    b.CB = "Slot in use.";
    b.qB = "SMG";
    b.rB = "SMG Damage";
    b.ki = "SMG Weight";
    b.sB = "SMGs";
    b.DB = "Sniper Rifle";
    b.EB = "Sniper Rifle Damage";
    b.ni = "Sniper Rifle Weight";
    b.FB = "Sniper Rifles";
    b.GB = "Soldier";
    b.HB = "Uncommon";
    b.oi = " m";
    b.IB = " N";
    b.xb = " sec";
    b.JB = "Vanguard";
    b.OB = "vs. Organics";
    b.KB = "Weapon\nBonus";
    b.pi = "Weapon Damage";
    b.LB = "Weapon mod rank";
    b.MB = "Weapon rank";
    b.NB = "Weight";
    b.PA = "Critical Mission Failure";
    b.OA = "Your browser is not supported.";
    b.Kf = "Accuracy";
    b.Ri = "Accuracy & Firing Rate";
    b.sc = "Adrenaline Rush";
    b.aj = "Decrease health and shield damage taken by {damageReduction}%.";
    b.bj = "Increase damage by {weaponDamage}%.";
    b.cj = "Increase melee damage by {meleeDamage}%.";
    b.dj = "Increase shield strength by {shieldStrength}%.";
    b.ej = "Use {ATTR_INT} offensive power while Adrenaline Rush is active.";
    b.fj = "Accelerate reflexes, granting time to line up the perfect shot.\n\nMore weapon damage.";
    b.gj = "Advanced Hardware";
    b.hj = "Boost health, shields/barriers, melee damage, durability, and shield regeneration.";
    b.jj = "Alliance Training";
    b.kj = "A decade of rigorous combat training in the Alliance starts to click.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.lj = "Allied Protection";
    b.mj = "Allied Shields Restored";
    b.nj = "Ammo Drop Frequency";
    b.oj = "Ancient Warrior";
    b.pj = "Boost health, shields/barriers, melee damage, and durability.\n\nUtilize heavy melee to switch to the powerful Ascension Stance to increase damage and power recharge speed at the expense of increasing the damage taken. This stance lasts {ascensionDuration} seconds.";
    b.bd = "Annihilation Field";
    b.qj = "Targets caught in the field take {enemyDamageTaken}% additional damage from all sources.";
    b.rj = "Increase movement speed by {movementSpeed}% while active.";
    b.sj = "Increase duration by {powerDuration}%.\nDrain {ATTR_PCT}% of the damage done to enemy shields/barriers to restore your own shields.";
    b.tj = "Spin this fiery effect around you to burn nearby enemies. When active, the field can be recast to blast a short-range area and to detonate combos.";
    b.Lf = "Arc Grenade";
    b.Mf = "Add an electrical effect that does {powerDOT}% additional damage over {ATTR_TIME} seconds.";
    b.Nf = "Stun and electrocute your enemies with an EMP-packed grenade. Effective against shields and barriers.";
    b.xj = "Area Scan";
    b.yj = "Armiger Legion";
    b.zj = "The turian's lethal 26th Armiger Legion is a respected and feared frontline assault squad.\n\nMore weapon damage.\nGreater stability and weapon control.\nMore strength.";
    b.Aj = "Armor Boost";
    b.Sa = "Armor Damage";
    b.cd = "Armor-Piercing";
    b.Bj = "Armor-Piercing Ammo";
    b.ae = "Armor-Piercing Arrows";
    b.Cj = "Shreds targets, doing an additional {powerDOT}% damage over {ATTR_TIME} seconds.";
    b.Dj = "Increase damage done to armor by {powerDamageArmor}% to weaken the target's armor resistance to weapons by {arrowArmorWeakening}% for {ATTR_TIME} seconds.";
    b.Ej = "Load {ATTR_INT} armor-piercing charges into your omni-bow to increase damage as well as the number of arrows fired simultaneously. When you run out of these armor-piercing charges, you will fire normal arrows again.\n\nHighly effective against armor.\nConsumes a grenade.";
    b.Pf = "Arrow Count";
    b.Jj = "Arrows Per Shot";
    b.Pj = "Decrease the weight of heavy pistols by {weaponWeightPistol}%.";
    b.Qj = "Centuries of training as a justicar come into focus on the battlefield.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.Lj = "Increase power duration bonuses by {globalDuration}%.";
    b.Mj = "Increase power duration by {globalDuration}%.\nIncrease weight capacity bonus by {encumbrance} points.";
    b.Nj = "Centuries of rigid training gives the asari greater martial prowess and the mental focus to strengthen their biotics.\n\nLonger power duration.\nMore weapon damage.\nMore strength.";
    b.Tj = "Ascension Damage";
    b.Uj = "Ascension Damage Bonus";
    b.Vj = "Increase damage bonus by {ascensionDamage}% while Ascension Stance is active.";
    b.Wj = "Ascension Damage Penalty";
    b.Xj = "Ascension Mastery";
    b.Zj = "Increase recharge speed by {ascensionRecharge}% while Ascension Stance is active.";
    b.Qf = "Ascension Recharge Speed";
    b.Yj = "Increase damage by {ascensionDamage}% and recharge speed by {ascensionRecharge}% while Ascension Stance is active at the expense of damage taken increasing by {ascensionDR}%.";
    b.dk = "Assault Rifle Damage";
    b.de = "Assault Rifles";
    b.Rf = "Backfire";
    b.fe = "Ballistic Blades";
    b.hk = "Increase cone spread by {ATTR_INT} degrees.";
    b.ik = "Increase attack range by {rangePct}%.";
    b.jk = "Increase damage by {powerDamage}%.\nIncrease bleed duration by {powerDuration}%.";
    b.kk = "Blades explode after {ATTR_TIME} seconds, doing {bladeDamage} damage but ending the bleed effect.";
    b.lk = "Fire a salvo of blades to impale your enemies, inflicting massive bleed damage.\n\nThe closer your target is, the more damage you deal.";
    b.rb = "Barrier";
    b.ok = "Increase recharge speed after detonation by {rechargeSpeed}%.";
    b.pk = "Increase shield regeneration rate by {shieldRechargeRate}% while Barrier is active.";
    b.qk = "Increase damage and force by {globalPowerDamage}% while Barrier is active.";
    b.Sf = "Increase the damage, force, and radius of the detonation by {powerDamage}%.";
    b.rk = "Reinforce armor with this biotic field. Detonate the field to lift and dangle nearby targets.\n\nReduce all forms of damage taken.\nSlows power use by {globalRecharge}%.";
    b.Tf = "Barrier Restored";
    b.Uf = "Barrier Strength";
    b.Vf = "Barriers & Armor";
    b.tk = "Batarian Enforcer";
    b.uk = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease spare ammunition by {ammoCapacity}%.";
    b.vk = "Reduce the weight of sniper rifles and shotguns by {weaponWeightShotgun}%.";
    b.wk = "Increase weapon damage by {weaponDamage}%.\nIncrease spare ammunition by {ammoCapacity}%.";
    b.xk = "The destruction of their home system has made the batarians even more ruthless in their struggle for survival.\n\nMore power damage.\nMore weapon damage.\nGreater thermal clip capacity.\nMore strength.";
    b.Fk = "Berserk";
    b.lb = "Biotic Charge";
    b.Wf = "Increase weapon damage by {weaponDamage}% for {ATTR_TIME} seconds after a successful Biotic Charge.";
    b.Ik = "Increase power damage and force by {globalPowerDamage}% for {ATTR_TIME} seconds after a successful Biotic Charge.";
    b.Xf = "Give Biotic Charge a {ATTR_PCT}% chance of not triggering a cooldown.";
    b.Yf = "Increase barriers by an additional {barrierRestored}% after a successful Biotic Charge.";
    b.Zf = "Smash into a target while encased in this biotic barrier, leveling your opponents.\n\nInvulnerable while this power is in effect.";
    b.Jk = "Increase melee damage by {meleeDamage}% for {ATTR_TIME} seconds after a successful Biotic Charge.";
    b.$f = "Hit up to {areaTargetBonus} additional targets within {radius} meters of the impact point.";
    b.ag = "Biotic Combo";
    b.bg = "Biotic Damage";
    b.he = "Biotic Focus";
    b.Lk = "Activate to regenerate barriers by {barrierRestored}% and to gain an invulnerability effect for {ATTR_TIME} seconds.";
    b.Mk = "Enter a heightened biotic state to reduce damage taken by {damageReduction}% and to increase movement speed by {movementSpeed}% and melee damage by {meleeDamage}%.";
    b.Nk = "Focus your biotic energy and atavistic muscle structure to decrease damage taken and to increase melee damage and movement speed for a short time.";
    b.ie = "Biotic Hammer";
    b.Ok = "Increase damage by {powerDamage}%.\nIncrease force by {powerForce}%.";
    b.Pk = "Increase damage and force of biotic detonations by {comboDamage}%.";
    b.Qk = "Increase damage done to armor by {ATTR_PCT}%.";
    b.Rk = "Increase the force of impacts by {powerForce}%.\nImpact passes through armor, shields, or barriers to knock down humanoid targets.";
    b.Sk = "Increase the number of charges generated by Biotic Hammer by {hammerCharges}.";
    b.Tk = "Charge your hammer with biotic energy, drastically increasing direct damage and force. Your melee attacks will expend these charges.\n\nHighly effective against armor and barriers.";
    b.ed = "Biotic Orbs";
    b.Uk = "Increase the recharge speed bonus of each orb by {orbRecharge}%.";
    b.Vk = "Each orb impact causes the target to take {ATTR_PCT}% more damage from all sources for {ATTR_TIME} seconds. This effect can stack up to {ATTR_INT} times.";
    b.Wk = "Increase the number of orbs summoned by {bioticOrbs}. This also boosts the maximum recharge speed bonus applied by the orbs.";
    b.Xk = "Summon {bioticOrbs} biotic orbs to float around you. Use the power again to launch an orb at your target. Each floating orb increases the recharge speed of your powers by {orbRecharge}%.\n\nHighly effective against armor and barriers.";
    b.Yk = "Biotic Shield";
    b.je = "Biotic Slash";
    b.Zk = "Charge your sword with biotic energy and slash nearby enemies in a wide swath, flattening unshielded opponents.";
    b.ke = "Biotic Sphere";
    b.$k = "Keep allies within the shield to decrease shield-recharge delay by {shieldRechargeRate}%.";
    b.al = "Increase the shield's radius by {radiusPct}%.";
    b.bl = "Increase damage reduction to allies within the shield by {damageReduction}%.";
    b.cl = "Increase the damage taken by enemies within the shielded area by an additional {enemyDamageTaken}%.";
    b.dl = "Decrease the damage that shielded allies take by {damageReduction}%.\nDecrease the delay before shields regenerate by {shieldRechargeRate}%.";
    b.el = "Hit enemies inside the shield with Warp, dealing {ATTR_DMG} damage per second and reducing armor by {enemyArmorWeakening}%.\n\nAffect up to {ATTR_INT} enemies at a time.\nSet an enemy up for a biotic detonation.";
    b.fl = "Create a defensive shield that surrounds the caster and nearby allies.\n\nMore damage dealt to enemies entering the shielded area.";
    b.tc = "Blade Armor";
    b.il = "Increase damage returned to targets that melee you by {meleeReflect}%.";
    b.jl = "Increase damage protection by an additional {damageReduction}%.";
    b.kl = "Reinforce armor with razor-sharp blades to damage enemies that melee.\n\nLess damage taken.\nMore melee damage dealt.\nSlows power use by {globalRecharge}%.";
    b.ll = "Blade Damage";
    b.cg = "Blast Damage";
    b.dg = "Blast Effect";
    b.ml = "Blast Radius";
    b.nl = "Bleed Damage";
    b.uc = "Bloodlust";
    b.ql = "Increase health regeneration by {bloodlustHealthRegen}%.";
    b.rl = "Increase melee damage of each stack by {bloodlustMeleeDamage}%.";
    b.sl = "Increase health regeneration of each stack by {bloodlustHealthRegen}%";
    b.tl = "Increase power damage bonus of each stack by {bloodlustPowerDamage}%.";
    b.ul = "Increase weapon damage bonus of each stack by {bloodlustWeaponDamage}%.";
    b.vl = "Increase movement speed bonus by {bloodlustMovementSpeed}%.\nIncrease melee damage bonus by {bloodlustMeleeDamage}%.";
    b.wl = "Increase health regeneration of each stack by an additional {bloodlustHealthRegen}%.";
    b.xl = "The vorcha flies into a frenzy, increasing movement speed, health regeneration, and melee damage. Each kill intensifies these effects and can stack up to three times.\n\nAdditional stacks last for {duration} seconds.\nSlows power use by {globalRecharge}%.\nLasts until deactivated.";
    b.yl = "Bonus Grenade Capacity";
    b.Kb = "Bonus Power";
    b.zl = "Bubble";
    b.Al = "Burning Damage";
    b.le = "Cain Trip Mine";
    b.Cl = "Increase damage done to armor by {powerDamageArmor}%.";
    b.Dl = "Attach a C4 proximity explosive to any surface that arms after {ATTR_TIME} seconds. Decimate the defenses of enemies that trip the sensor. Only {ATTR_INT} mines can be armed at a time.\n\nHighly effective against armor, shields, and barriers.\nConsumes a grenade.";
    b.fg = "Increase explosion radius by {radiusPct}%.";
    b.fd = "Capacity";
    b.Xb = "Carnage";
    b.El = "Incapacitate enemies by knocking them down.";
    b.Fl = "Rip a target into shreds with this vicious blast.\n\nMajor collateral damage to enemies nearby.\nEffective against armor.";
    b.Il = "Chain Lightning";
    b.gg = "Chain Overload";
    b.hg = "Charge Capacity";
    b.Jl = "Charge Generation";
    b.Kl = "Charge Regeneration";
    b.ig = "Chill";
    b.Yb = "Cluster Grenade";
    b.Ml = "Increase damage to already-lifted targets by {ATTR_PCT}%.";
    b.Nl = "Increase shrapnel count by {ATTR_INT}.";
    b.Ol = "Lob this biotic grenade cluster at your enemies and watch them fly.";
    b.jg = "Collector/Prothean Weapon Damage";
    b.Pl = "Cobra Missiles";
    b.vc = "Combat Drone";
    b.Wl = "Drone explodes when destroyed, dealing {ATTR_DMG} points of damage across a {radius} meter radius.";
    b.Xl = "Upgrade drone's short-range attack to deal {ATTR_DMG} points of damage across a {radius} meter radius.\nDrone stuns enemies for a short duration.";
    b.Yl = "Upgrade drone with long-range rockets that deal {ATTR_DMG} points of damage across a {radius} meter radius.";
    b.Zl = "Upgrade drone's electrical pulse to jump and hit {areaTargetBonus} additional targets.";
    b.$l = "Deploy this attack drone to stun targets and draw enemy fire.";
    b.me = "Concussive Arrows";
    b.em = "Add an electrical effect to do an additional {powerDOT}% damage over {ATTR_TIME} seconds while briefly stunning the targets. This effect can be detonated.";
    b.fm = "Add a chill effect to each arrow that slows enemy movement by {enemyMovementSpeed}% and increases all damage done to it by {ATTR_PCT}%. This effect lasts {ATTR_TIME} seconds and can stack {ATTR_INT} times.";
    b.gm = "Load {ATTR_INT} concussive charges into your omni-bow to increase impact force, to knock down unarmored enemies, and to increase the number of arrows fired simultaneously. When you run out of concussive charges, you will fire normal arrows again.\n\nHighly effective against barriers.\nConsumes a grenade.";
    b.wc = "Concussive Shot";
    b.hm = "Increase force and damage to frozen targets by {ATTR_PCT}%.";
    b.im = "Increase damage by {powerDamage}% and radius by {radius} meters.";
    b.jm = "Increase damage done to organics by {powerDOT}% over {ATTR_INT} seconds.\nIncrease force by {powerForce}%.";
    b.km = "Flatten your enemy with a precise blast at short or long range.\n\nEffective against barriers.";
    b.lm = "Cone Spread";
    b.nm = "Cryo Ammo";
    b.Zb = "Cryo Blast";
    b.om = "Decrease movement speed of chilled targets by an additional {enemyMovementSpeed}%.";
    b.pm = "Increase damage to frozen and chilled targets by {enemyDamageTaken}%.\nWeaken armored targets by an additional {enemyArmorWeakening}%.";
    b.qm = "Flash-freeze and shatter unprotected enemies. Slow down the rest.\n\nWeaken armor.\nFrozen targets won't regenerate health.";
    b.lg = "Cryo Explosion";
    b.tm = "Cryo Shield";
    b.l = "Damage";
    b.wm = "Damage & Ammo";
    b.xm = "Damage & Bleed";
    b.oa = "Damage & Capacity";
    b.pa = "Increase power damage and force bonuses by {globalPowerDamage}%.\nIncrease weight capacity bonus by {encumbrance} points.";
    b.ne = "Damage & Duration";
    b.ym = "Damage and Force";
    b.zm = "Damage & Max Grenades";
    b.oe = "Damage & Radius";
    b.ng = "Damage & Slow";
    b.gd = "Damage & Stability";
    b.hd = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease weapon stability bonus by {stability}%.";
    b.Am = "Damage & Weakness";
    b.pe = "Damage Bonus";
    b.Bm = "Damage Combo";
    b.og = "Damage Over Time";
    b.Cm = "Damage Over Time Duration";
    b.pg = "Damage Per Second";
    b.qg = "Damage Protection";
    b.xc = "Damage Reduction";
    b.Dm = "Damage Returned";
    b.Em = "Damage Synergy";
    b.qe = "Damage Taken";
    b.Fm = "Damage Taken Increase";
    b.yc = "Dark Channel";
    b.Gm = "Slow target's movement speed by {enemyMovementSpeed}%.";
    b.Hm = "Increase damage to armor and barriers by {powerDamageArmor}%.";
    b.Im = "Plague an opponent with a persistent, damaging biotic field.\n\nEffect transfers to a second target if the first is killed.\nEffect's length depends on Dark Channel's duration.\nOnly one field may be active at a time.";
    b.Jm = "Dark Matter";
    b.re = "Dark Sphere";
    b.Km = "Increase detonation damage by {powerDamage}%.\nIncrease damage over time by {dotDamage}%.";
    b.Lm = "Increase detonation damage by {powerDamage}% and damage over time by {dotDamage}%.";
    b.Mm = "Increase the detonation radius of the dark sphere by {radiusPct}%.";
    b.Nm = "Increase damage over time by {dotDamage}% and duration by {powerDuration}%.";
    b.Om = "Dark Sphere implodes to do {powerDamage}% more damage at the expense of decreasing the detonation radius by {radiusPct}%.";
    b.Pm = "Destabilize the Dark Sphere to increase the detonation radius by {radiusPct}%.\nIncrease damage over time by {dotDamage}%.\nIncrease duration by {powerDuration}%.";
    b.Qm = "Launch a slow-moving sphere of ark energy to cause damage over time to any target it passes over. The sphere can be detonated at any time to cause massive damage.\n\nThis power only has a cooldown when detonated.";
    b.jd = "Decoy";
    b.Sm = "Increase shields by {decoyShieldStrength}%.";
    b.Tm = "Shock enemies for {ATTR_DMG} points within a {radius} meter radius of the decoy.";
    b.Um = "Decoy explodes on destruction, causing {ATTR_DMG} damage across {radius} meters.";
    b.Vm = "Increase shields by {decoyShieldStrength}%.\nIncrease duration by {powerDuration}%.";
    b.Wm = "Distract opponents with this decoy.";
    b.Xm = "Decoy Shields";
    b.se = "Decrease assault rifle weight by {weaponWeightAssault}%.";
    b.rg = "Decrease damage taken by {damageReduction}%.";
    b.te = "Decrease the weight of shotguns by {weaponWeightShotgun}%.";
    b.zc = "Decrease weight of all weapons by {weaponWeight}%.";
    b.zb = "Detonate";
    b.an = "Detonation Damage";
    b.tg = "Detonation Radius";
    b.bn = "Detonation Recharge Speed";
    b.ue = "Devastator Mode";
    b.cn = "Reduce the delay before shields start regenerating by {shieldRechargeRate}%.";
    b.dn = "Increase weapon accuracy bonus by {accuracy}% while active.";
    b.en = "Increase rate of fire by {weaponROF}%.";
    b.gn = "Increase max shields by {shieldStrength}%.";
    b.ug = "Increase damage bonus by {weaponDamage}%.";
    b.hn = "Turn into a powerful turret with the T5-V Battlesuit.\n\nIncrease weapon damage, rate of fire, and magazine size.\nSlows movement speed.\nStays active until disabled.";
    b.vg = "Increase magazine size by {magazineSize}%.";
    b.nn = "Double Dash";
    b.wg = "Drain";
    b.we = "Drell Assassin";
    b.qn = "Decrease weight of heavy pistols by {weaponWeightPistol}%.";
    b.rn = "Practice makes perfect, and years spent tuning reflexes for the perfect killshot are paying dividends.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.vn = "Drone Damage";
    b.wn = "Drone Shields";
    b.S = "Durability";
    b.W = "Duration";
    b.xn = "Duration & Capacity";
    b.yn = "Duration & Combo";
    b.zn = "Duration & Slow";
    b.An = "Efficient Blast";
    b.Bn = "Electric Damage";
    b.Cn = "Electric Field";
    b.ye = "Electrical Damage";
    b.ze = "Electrical Hammer";
    b.Fn = "Increase damage radius by {radiusPct}%.";
    b.Gn = "Increase damage done to shields/barrier by {powerDamageBarrier}%.";
    b.Hn = "Add a fire effect to impacted targets to do {ATTR_DMG} damage over {ATTR_TIME} seconds.\n\nApplies fire DoT.";
    b.In = "Add a chill effect to impacted targets that decreases movement speed by {enemyMovementSpeed}% and increases all damage by {enemyDamageTaken}%.\nThis effect lasts {ATTR_TIME} seconds.";
    b.Jn = "Increase impact radius by {radiusPct}%.\nIncrease the damage of tech combo detonations by {techCombo}%.";
    b.Kn = "Increase the number of charges generated by Electric Hammer by {hammerCharges}.";
    b.Ln = "Charge your hammer with electric energy, making all hammer impacts do electrical damage in a large area while stunning enemies. Your melee attacks will expend these charges.\n\nHighly effective against shields and barriers.";
    b.xe = "Electric Slash";
    b.Dn = "Increase force and damage of tech detonations by {ATTR_PCT}%.";
    b.En = "Unleash a wave of electrical energy from your sword to stun and damage all enemies in a cone.\n\nHighly effective against shields/barriers.\nConsidered a power attack.\nReceives damage bonuses from power upgrades.";
    b.Mn = "Elite Mercenary";
    b.Nn = "Increase the rate that charges are regenerated by {rechargeSpeed}%.";
    b.On = "Years of experience working for hire have honed your combat abilities.\n\nIncrease power and weapon damage. Your battery pack also slowly regenerates a charge that can be consumed to lay Cain Trip Mines or to equip Concussive or Armor-Piercing Arrows.";
    b.Pn = "Enemy Movement Speed";
    b.Qn = "Enemy Weakness";
    b.Ac = "Energy Drain";
    b.Rn = "Increase shield restoration rate by {shieldRestored}% when draining shields, barriers, or power from synthetic enemies.";
    b.Sn = "Reduce damage taken by {damageReduction}% for {ATTR_TIME} seconds by gaining a temporary layer of armor by draining shields, barriers, or energy from synthetics.";
    b.Tn = "Hit an enemy with this energy pulse to inflict damage and to steal barrier and shield power.";
    b.Wn = "Enhanced Blades";
    b.Xn = "Enhanced Repair Matrix";
    b.Yn = "Enhanced Vision Range";
    b.ho = "Exploding Blades";
    b.io = "Exploding Decoy";
    b.jo = "Explosion Damage";
    b.yg = "Explosion Radius";
    b.ko = "Explosive Blades";
    b.lo = "Explosive Hack";
    b.Ae = "Expose";
    b.oo = "Extra Grenade";
    b.po = "Fast Recharge";
    b.zg = "Fire Damage";
    b.qo = "Fire Shield";
    b.ro = "Firing Rate";
    b.$b = "Fitness";
    b.Ma = "Decrease shield-recharge delay by {shieldRechargeRate}%.";
    b.Mb = "Boost health, shields/barriers, melee damage, and durability.";
    b.so = "Increase health and shield bonuses by {durability}%.\nIncrease movement speed bonus by {movementSpeed}%.";
    b.to = "Boost health, shields/barriers, melee damage, durability, and movement speed.";
    b.Ta = "Fitness Expert";
    b.cb = "Increase melee damage by {meleeDamage}% for {ATTR_TIME} seconds after an enemy is killed by a heavy melee.";
    b.Bb = "Increase melee damage bonus by {meleeDamage}%.\nIncrease weapon damage bonus by {weaponDamage}% for {ATTR_TIME} seconds after an enemy is killed by heavy melee.";
    b.uo = "Fitness Module";
    b.Ag = "Increase melee damage bonus by {meleeDamage}%.\nIncrease power damage bonus by {globalPowerDamage}% for {ATTR_TIME} seconds after an enemy is killed by a heavy melee.";
    b.Bg = "Increase melee damage bonus by {meleeDamage}%.\nIncrease melee damage bonus by {rageMeleeDamage}% while in Rage mode.";
    b.vo = "Increase health and shield bonues by {durability}%.\nIncrease damage protection by an additional {rageDR}% while in Rage mode.";
    b.Cg = "Increase melee damage bonus by {meleeDamage}%.\nReduce the number of melee kills required to trigger Rage to {ATTR_INT} within {ATTR_TIME} seconds.";
    b.wo = "Increase health and shield bonuses by {durability}%.\nIncrease damage protection by {rageDR}% while in Rage mode.";
    b.xo = "Boost health, shields, melee damage, and durability.\n\nMelee and kill {ATTR_INT} enemies within {ATTR_TIME} seconds to send the krogan into a frenzy, increasing melee damage and reducing damage taken for {rageDuration} seconds.";
    b.yo = "Increase health and shield bonuses by {durability}%.\nIncrease damage protection by an additional {rageDR}% and health regeneration by {rageHealthRegen}% while in Rage mode.";
    b.zo = "Increase health and shield bonuses by {durability}%.\nIncrease damage protection by {rageDR}% and health regeneration by {rageHealthRegen}% while in Rage mode.";
    b.Ao = "Boost health, shields, melee damage, and durability.\nThis krogan regenerates health slowly during combat, restoring {rageHOT} health per second.\n\nMelee and kill {ATTR_INT} enemies within {ATTR_TIME} seconds to go into a frenzy to increase melee damage, reduce damage taken, and to boost health regeneration for {rageDuration} seconds.";
    b.Bc = "Flamer";
    b.Ko = "Fire a powerful short-range flame attack. The flames will persist for a max duration and can be canceled early for a faster recharge.\n\nHighly effective against armor.\n\nSubject to a self-stacking glitch; damage can reach 3 times the presented value with continuous fire. Applies fire DoT.";
    b.Dg = "Flamethrower";
    b.Ee = "Force";
    b.ga = "Force & Damage";
    b.ld = "Fortification";
    b.Lo = "Increase recharge speed by {rechargeSpeed}% when armor is purged.";
    b.Mo = "Increase power damage and force by {globalPowerDamage}% while Fortification is active.";
    b.No = "Reinforce armor using protective Foucault currents.\nPurge the current and send its charge to your gauntlets for increased melee damage.\n\nSlow power use by {globalRecharge}%.";
    b.Eg = "Increase melee damage bonus by {meleeDamage}% when armor is purged.";
    b.Cc = "Frag Grenade";
    b.Oo = "Increase damage to organics by {powerDOT}% over {ATTR_TIME} seconds.";
    b.Po = "Increase damage to armor by {ATTR_PCT}%.";
    b.Qo = "Increase damage to shields by {ATTR_PCT}%.";
    b.Ro = "Rip your enemies apart with this shrapnel-packed grenade.";
    b.So = "Freeze Combo";
    b.Fg = "Freeze Duration";
    b.To = "Frozen Vulnerability";
    b.fp = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease damage done with geth weapons by {gethWeaponDamage}%.";
    b.gp = "This advanced combat platform fine-tunes powers and weapons.\n\nMore weapon damage.\nMore weapon stability and spare ammunition.\nMore strength.";
    b.Mg = "Increase weapon stability by {stability}%.\nIncrease spare ammunition by {ammoCapacity}%.";
    b.od = "Geth Turret";
    b.sp = "Increase the shields restored to allies by {turretRestorePct}%.";
    b.tp = "Increase the turret's damage by {powerDamage}%.\nIncrease the damage done to armor by {powerDamageArmor}%.";
    b.up = "Increase the shields restored to allies by {turretRestorePct}%.\nIncrease the range of this ability by {rangePct}%.";
    b.vp = "Increase the frequency of restoring shields by {ATTR_PCT}%.";
    b.wp = "Deploy a multifunctional turret that deals heavy damage and repairs the shields of allies within {ATTR_INT} meters every {ATTR_TIME} seconds.";
    b.xp = "Geth Weapon Damage";
    b.Ap = "Grapple Duration";
    b.sb = "Grenade Capacity";
    b.Cp = "Grenade Count";
    b.Dp = "Grenade Drop Frequency";
    b.Gp = "Hack Duration";
    b.Hp = "Half Blast";
    b.Ip = "Hammer";
    b.Jp = "Hardened Platform";
    b.Kp = "Increase movement speed by {movementSpeed}% for {ATTR_TIME} seconds after an enemy is killed by a heavy melee.";
    b.Lp = "All allies within {radius} meters do {alliedWeaponDamage}% more damage. This bonus does not affect you.\nIncrease your melee damage by {meleeDamage}%.";
    b.Mp = "Increase health and shield bonuses by {durability}%.\nIncrease shields restored by heavy melee by {meleeRestore}%.\nDecrease all damage done by {globalDamage}%.";
    b.Np = "Boost health, shields, melee damage, and shield regeneration in addition to upgrading shield draining and advanced squad tactics. Shield upgrades also increase the strength of your Hex Shield.\n\nYour heavy melee drains energy from your target, restoring your shields.";
    b.Og = "Increase health and shield bonuses by {durability}%.\nIncrease the shields restored by heavy melee by {meleeRestore}%.";
    b.Op = "Hardening";
    b.Je = "Havoc Strike";
    b.Pp = "Increase weapon damage by {weaponDamage}% for {ATTR_TIME} seconds after a successful charge.";
    b.Qp = "Increase melee damage by {meleeDamage}% for {ATTR_TIME} seconds after a successful charge.";
    b.Rp = "Expand the spread of the flame to hit up to {areaTargetBonus} additional targets within {radius} meters of the impact point.";
    b.Sp = "Use the propulsion pack to launch a devastating strike on multiple targets.";
    b.Ke = "Hawk Missile Launcher";
    b.Tp = "Increase missile damage by {powerDamage}%.";
    b.Up = "Reduce shield penalty by {shieldStrength}%.";
    b.Vp = "Increase missile damage and force by {powerDamage}%.";
    b.Wp = "Upgrade missile housing to fire {ATTR_INT} extra seeking projectiles.\n\nDecreases the payload of each missile by {powerDamage}%.";
    b.Xp = "Upgrade missile munitions to increase damage and force by {powerDamage}%.\nIncrease impact radius by {radiusPct}%.";
    b.Yp = "Rip a target into shreds with the T5-V's autofiring shoulder cannon.\n\nLock onto a target to launch a stinger missile.\nStays active until disabled.\nDecreases max shields by {shieldStrength}% while active.";
    b.Pg = "Reduce refire time by {missileFrequency}%.";
    b.ca = "Headshots";
    b.Zp = "Health & Shield";
    b.pd = "Health Regeneration";
    b.$p = "Heightened Focus";
    b.Le = "Hex Shield";
    b.aq = "Upon spawning, an electric pulse is emitted that does {ATTR_DMG} damage in a {radius} meter radius.";
    b.bq = "Enemies passing through the shield are electrified, taking {ATTR_DMG} damage over {ATTR_TIME} seconds. This effect can be detonated.";
    b.cq = "While active, generate additional energy for all your systems to increase damage by {globalDamage}%.";
    b.dq = "Spawn a wider shield and increase shield strength by {hexShieldStrength}%.";
    b.fq = "Spawn a geth energy barrier that blocks all fast-moving projectiles, including bullets.";
    b.Qg = "Increase shield strength by {hexShieldStrength}%.";
    b.Gc = "Homing Grenade";
    b.gq = "Add a fire effect to targets, dealing {powerDOT}% additional damage over {ATTR_TIME} seconds.\n\nApplies fire DoT.";
    b.hq = "Increase damage to armor by {powerDamageArmor}%.\nDecrease weapon damage mitigation of armored targets by {homingGrenadeArmor}% for {ATTR_TIME} seconds.";
    b.iq = "Split a grenade in half to seek two targets that do {ATTR_PCT}% damage each.";
    b.jq = "Launch this seeking frenade to track down a target, causing a massive explosion on impact.";
    b.Hc = "Hunter Mode";
    b.wq = "Increase recharge speed of all powers by {globalRecharge}% while active.";
    b.xq = "Increase damage of all powers by {globalPowerDamage}% while active.";
    b.yq = "Increase rate of fire of all weapons by {weaponROF}% while active.";
    b.zq = "Increase movement speed bonus by {movementSpeed}%.\nIncrease the range of your enhanced vision by {radiusPct}%.";
    b.Aq = "Advanced diagnostics redirect power into offensive systems, boosting combat capabilities.\n\nFaster movement.\nSee through smoke and objects.\nMore weapon, power, and melee damage.\nGreater weapon accuracy.\nShields reduced by {shieldStrength}%.";
    b.Bq = "Hydra Missiles";
    b.ec = "Impact Radius";
    b.Rg = "Incapacitate";
    b.Eq = "Incapacitate Duration";
    b.Hq = "Incendiary Strike";
    b.tb = "Incinerate";
    b.Iq = "Increase damage by an additional {powerDOT}% over {ATTR_TIME} seconds.";
    b.Jq = "Increase damage to frozen and chilled targets by an additional {freezeDamage}%.";
    b.Kq = "Burn your opponents and incinerate their armor.\n\nHeavy damage to health and armor.\nMake an enemy panic, stopping health regeneration.\n\nApplies fire DoT.";
    b.Lq = "Increase accuracy bonus by {accuracy}%.";
    b.Sg = "Increase the number of arrows released per shot by {arrowCount}.";
    b.p = "Increase damage by {powerDamage}%.";
    b.Tg = "Increase damage by {powerDamage}%.\nIncrease duration by {powerDuration}%.";
    b.ua = "Increase damage and force by {powerDamage}%.";
    b.N = "Increase power damage and force bonuses by {globalPowerDamage}%.";
    b.Ic = "Increase damage to armor by {powerDamageArmor}%.";
    b.Ug = "Increase damage to armored targets by {powerDamageArmor}%.";
    b.Vg = "Increase damage to armored units by {powerDamageArmor}%.";
    b.Jc = "Increase damage bonus by {globalDamage}%.";
    b.Wg = "Increase damage to chilled and frozen targets by {enemyDamageTaken}%.";
    b.fc = "Increase damage protection by {damageReduction}%.";
    b.qd = "Increase damage to shields and barriers by {powerDamageBarrier}%.";
    b.Me = "Increase drone's damage by {powerDamage}%.\nIncrease drone's shields by {petShieldStrength}%.";
    b.Ca = "Increase duration by {powerDuration}%.";
    b.Mq = "Increase effectiveness against armored targets by {powerDamageArmor}%.";
    b.Ne = "Increase effectiveness against armor and barriers by {powerDamageArmor}%.";
    b.Xg = "Increse force by {powerForce}%.";
    b.Yg = "Increase force and damage by {powerDamage}%.";
    b.rd = "Increase force and damage of biotic detonations by {comboDamage}%.";
    b.ka = "Increase grenade capacity by {grenadeCapacity}.";
    b.la = "Increase headshot damage bonus by {headshot}%.";
    b.T = "Increase health and shield bonuses by {durability}%.";
    b.Pb = "Increase impact radius by {radius} meters.";
    b.ma = "Increase impact radius by {radiusPct}%.";
    b.da = "Increase melee damage bonus by {meleeDamage}%.";
    b.Zg = "Increase movement speed by {movementSpeed}%.";
    b.Ka = "Increase power duration by {powerDuration}%.";
    b.gc = "Increase range by {rangePct}%.";
    b.m = "Increase recharge speed by {rechargeSpeed}%.";
    b.$g = "Increase shield recharge rate by {shieldRechargeRate}%.";
    b.sd = "Increase turret's shields by {petShieldStrength}%.\nIncrease turret's damage by {powerDamage}%.";
    b.Nq = "Increase weapon accuracy bonus by {accuracy}%.";
    b.q = "Increase weapon damage bonus by {weaponDamage}%.";
    b.ah = "Increase weapon stability bonus by {stability}%.";
    b.td = "Inferno Grenade";
    b.Oq = "Increase impact radius by {radiusPct}%.\nIncrease shrapnel by {ATTR_INT} fragments.";
    b.Pq = "Cluster-bomb a small area with incendiary munitions.\n\nDamage can be sustained indefinitely with Incendiary ammo. Applies fire DoT.";
    b.Qq = "Initial Shield Boost";
    b.Rq = "Invasive Scan";
    b.Xq = "Killing Spree";
    b.$q = "Knockdown";
    b.ar = "Knockdown Chance";
    b.jh = "Krogan Berserker";
    b.Qe = "Battle-skills hardened on unforgiving Tuchanka come into play.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.hr = "Large Shield";
    b.hc = "Lash";
    b.ir = "Do an additional {ATTR_PCT}% damage over {ATTR_TIME} seconds.";
    b.jr = "Give the power a {ATTR_PCT}% chance of not causing a cooldown.\nIncrease the time that lifted targets can be detonated by {lashCombo}%.";
    b.kr = "Penetrate through shields and barriers, lifting any target without armor but with reduced force.";
    b.lr = "Latch this biotic field onto enemies to jerk them toward you, doing massive damage in the process.";
    b.mr = "Lasting Damage";
    b.nr = "Lasting Repair Matrix";
    b.lh = "Lift Damage";
    b.wd = "Lift Grenade";
    b.or = "Slam floating targets to the ground as Lift wears off, stunning them for {ATTR_TIME} seconds.";
    b.pr = "Increase damage by {powerDamage}%.\nIncrease impact radius by {radiusPct}%.";
    b.qr = "Lob this grenade into a group of enemies to send them flying.\n\nDeal high damage.";
    b.rr = "Lifting Shockwave";
    b.Se = "Magazine Size";
    b.yd = "Marksman";
    b.ys = "Increase firing rate bonus by {weaponROF}%.";
    b.zs = "Increase headshot damage by {ATTR_PCT}%.";
    b.As = "Increase accuracy and firing rate bonuses by {accuracy}%.";
    b.Bs = "Boost weapon accuracy and firing rate for a short time.";
    b.$a = "Martial Artist";
    b.La = "Max Grenades";
    b.zd = "Max Shields";
    b.P = "Melee Damage";
    b.Gs = "Melee Damage Duration";
    b.Hs = "Melee Damage Returned";
    b.wb = "Melee Synergy";
    b.Ks = "Missile Damage";
    b.Ls = "Missile Recharge Speed";
    b.Ms = "Movement and Melee";
    b.jc = "Movement Speed";
    b.Ns = "Movement Speed Duration";
    b.Os = "Movement Speed Penalty";
    b.Te = "Multi-Frag Grenade";
    b.Ps = "Increase the number of grenades launched by {ATTR_INT}.";
    b.Qs = "Launch multiple frag grenades by upgrading the T5-V's right gauntlet.";
    b.Vs = "Increase power damage and force bonuses by {globalPowerDamage}%.\nIncrease grenade capacity by {grenadeCapacity}.";
    b.Ws = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease grenade capacity by {grenadeCapacity}.";
    b.Xs = "Combat skills are perfected to an art with N7 training.\n\nMore power damage.\nMore weapon damage.\nGreater grenade capacity.";
    b.Kc = "Decrease weight of all weapons by {weaponWeight}%.";
    b.Ad = "Combat skills are perfected to an art with N7 training.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.kt = "Networked AI";
    b.lt = "Reduce the weight of assault rifles and sniper rifles by {weaponWeightAssault}%.";
    b.mt = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease geth weapon damage bonus by {gethWeaponDamage}%.";
    b.nt = "Advanced combat platform fine-tunes powers and weapons, especially geth weapons.\n\nMore power damage.\nMore weapon damage.\nMore geth weapon damage.\nMore strength.";
    b.ot = "Neural Shock";
    b.Ue = "Nightshade Blades";
    b.pt = "Boost the concentration of neurotoxins to increase the paralyze duration by {paralyzeDuration}% and poison duration by {powerDuration}%.";
    b.qt = "Booost the concentration of venom in the blades to increase direct damage by {powerDamage}% and poison damage by {poisonDamage}%.";
    b.rt = "Blades explode after {ATTR_TIME} seconds, doing {bladeDamage} poisonous area damage.";
    b.th = "Increase blade carrying capacity by {grenadeCapacity}.";
    b.st = "Launch a short-range volley of venom tipped blades to paralyze non-shielded targets. These blades cause instant damage and poison the target, causing damage over time.\n\nBlade damage is most effective at close-range.\nA limited number of these blades can be carried.";
    b.Bd = "Nova";
    b.tt = "Increase recharge speed of all powers by {globalRecharge}% for {ATTR_TIME} seconds.";
    b.ut = "Gain the option to use Nova two times in a row by reducing its barrier consumption by {ATTR_PCT}% but at the cost of reducing damage and force by {powerDamage}%.";
    b.vt = "Increase damage to barriers, shields, and armored targets by {powerDamageArmor}%.";
    b.wt = "Nova gains a {ATTR_PCT}% change of not using up barriers.";
    b.xt = "Transfer the energy of your biotic barrier to charge and spark this deadly blast.\n\nBarrier strength determines blast intensity.";
    b.Cd = "Number of Charges";
    b.yt = "Number of Shots";
    b.Dd = "Omni-Bow Damage";
    b.zt = "Omni-Bow Mastery";
    b.At = "Increase omni-bow damage by {meleeDamage}% for {ATTR_TIME} seconds after an enemy is killed by your omni-bow.";
    b.Ve = "Increase omni-bow damage by {meleeDamage}%.";
    b.Bt = "Boost health, shields, and omni-bow damage. Your omni-bow attacks are considered melee attacks and receive bonuses from melee upgrades. Concussive and armor-piercing arrows are considered power attacks and receive bonuses from power upgrades. While active, concussive and armor-piercing arrow damage supplements the base omni-bow damage.";
    b.Et = "Omni-Shield Health";
    b.Ht = "Orb Count";
    b.Rb = "Overload";
    b.It = "Hit {areaTargetBonus} additional target within {radius} meters with {ATTR_PCT}% less damage.";
    b.Jt = "Incapacitate weaker organic enemies for a short duration.";
    b.Kt = "Increase damage by {powerDamage}%.\nHit {areaTargetBonus} additional target within {radius} meters with {ATTR_PCT}% less damage.";
    b.Lt = "Increase damage to barriers and shields by an additional {powerDamageShield}%.";
    b.Mt = "Overload electronics with this power surge, stunning your enemy.\n\nEffective against shields, barriers, and synthetics.\nNot as effective against organics.";
    b.uh = "Pack Capacity";
    b.Nt = "Paralysis Duration";
    b.We = "Phase Disruptor";
    b.St = "Knock weaker enemies to the ground.";
    b.Tt = "Reduce the amount of barrier drained by {ATTR_PCT}%.";
    b.Ut = "Increase damage to shields/barriers by {powerDamageShield}%.";
    b.Vt = "Focus the energy of your barrier to fire a high-powered beam at a target from afar.\n\nFireing the beam consumes {ATTR_PCT}% of max barrier.";
    b.Yt = "Phoenix Training";
    b.Zt = "These operatives had upgrades installed by their former employer Cerberus to dramatically improve biotic and combat skills.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.Xe = "Pierce";
    b.tu = "Pistols";
    b.vh = "Pistols & Shotguns";
    b.uu = "Poison Damage Per Second";
    b.Fd = "Poison Duration";
    b.vu = "Poison Strength";
    b.Ye = "Poison Strike";
    b.wu = "Increase poison duration by {powerDuration}%.";
    b.xu = "Increase poison damage by {poisonDamage}%.\nParalyze up to {ATTR_INT} unshielded enemies for {ATTR_TIME} seconds.";
    b.yu = "Reduce dash range by {rangePct}%, but only every other dash triggers a cooldown.";
    b.zu = "Slash through an enemy line while encased in this biotic barrier causing instant biotic damage and applying a poison effect that does damage over time to every hit enemy.\n\nInvulnerable while this power is in effect.";
    b.J = "Power Damage";
    b.Cu = "Power Duration";
    b.Fu = "Power Hammer";
    b.kc = "Power Recharge";
    b.Lc = "Power Synergy";
    b.Gu = "Power Transfer";
    b.Hu = "Power Use";
    b.Iu = "Protection";
    b.lc = "Proximity Mine";
    b.Ju = "Increase damage dealt to targets from all sources by {enemyDamageTaken}% for {ATTR_TIME} seconds.";
    b.Ku = "Slow target's movement speed by {enemyMovementSpeed}% for {ATTR_TIME} seconds.";
    b.Lu = "Fire this sticky mine into traffic. It will detonate when an enemy steps within range.";
    b.Mu = "Proximity Trap";
    b.Mc = "Pull";
    b.Nu = "Inflict {ATTR_DMG} damage per second to lifted targets.";
    b.Ou = "Increase all damage to targets lifted by Pull by {enemyDamageTaken}%.";
    b.Pu = "Increase duration by {powerDuration}%, and increase the force and damage of biotic detonations on affected targets by {comboDamage}%.";
    b.Qu = "Yank an opponent helplessly off the ground.";
    b.Ru = "Pulse";
    b.xh = "Pure Rage";
    b.$e = "Quarian Defender";
    b.Su = "Reduce the weight of SMGs by {weaponWeightSMG}%.";
    b.af = "Built on a lifetime spent defending the flotilla from the geth, combat skills reach new heights.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.Y = "Radius";
    b.mv = "Radius & Combo";
    b.nv = "Radius & Shrapnel";
    b.ov = "Rage";
    b.pv = "Rage Damage Reduction";
    b.qv = "Rage Health Regeneration";
    b.rv = "Rage Melee Damage";
    b.Range = "Range";
    b.hf = "Rate of Fire";
    b.jf = "Reach";
    b.Dh = "Reave";
    b.Eh = "Increase damage by {powerDamage}%.\nIncrease duration by {powerDuration}%.\nIncrease damage protection bonus by {damageReduction}%.";
    b.Fh = "Drain a target's health and disrupt their resistances, receiving increased damage protection while this power is in effect.\n\nEffective against barriers and armor.";
    b.uv = "Recharge";
    b.vv = "Recharge Combo";
    b.k = "Recharge Speed";
    b.wv = "Recharge Speed Per Orb";
    b.Kd = "Recon Mine";
    b.xv = "Increase scan and explosion radius by {radiusPct}%.";
    b.yv = "Scanned enemies take {enemyDamageTaken}% more damage from all sources and move {enemyMovementSpeed}% more slowly.";
    b.zv = "Launch a mine that sticks to the first surface it touches and arms after {ATTR_TIME} seconds. The mine scans the area for enemies to provide a tactical overlay, and it can be detonated at any time to deal massive damage to nearby targets.\n\nOnly one mine can be active at a time.";
    b.Ld = "Reduce power speed penalty by {globalRecharge}%.";
    b.Gh = "Reduce the weight of pistols and shotguns by {weaponWeightPistol}%.";
    b.Hh = "Refire Time";
    b.Cv = "Regeneration";
    b.kf = "Repair Matrix";
    b.Ev = "Decrease damage taken by 5%.\nIncrease movement speed by {movementSpeed}%.";
    b.Fv = "When getting back up from a downed state, take 75% less damage for {ATTR_TIME} seconds.";
    b.Gv = "Increase the amount of shields restored by {repairShields}%.\nReduce damage taken by 10%.";
    b.Ih = "Increase the maximum number of charges that can be carried by {grenadeCapacity}.";
    b.Hv = "Reinforce armor with metal-repelling Foucault currents to increase movement speed, decrease damage taken, and to regenerate shields for a short duration. When activated, the fallen caster instantly gets back on their feet. This can only occur once, and a limited number of charges can be carried for this power.";
    b.Jh = "Increase the amount of shields restored by {repairShields}%.";
    b.Kv = "Resistance Damage";
    b.Nv = "Restore Duration";
    b.Ov = "Restore Frequency";
    b.Pv = "Restore Range";
    b.Lh = "Resupply Frequency";
    b.Mh = "Increase the rate of ammunition generation by {ammoFrequency}%.\nIncrease the rate of grenade generation by {grenadeFrequency}%.";
    b.Nh = "Rockets";
    b.Nc = "Sabotage";
    b.kw = "Increase damage taken by {powerDamage}% when enemy weapons overheat.";
    b.lw = "Synthetics explode when destroyed, dealing {ATTR_DMG} points of damage across a {ATTR_INT} meter radius.";
    b.mw = "Hacked synthetics fighting on your side move faster and do {ATTR_PCT}% more damage.";
    b.nw = "Increase all tech power damage done to target by {powerDamage}% for {ATTR_TIME} seconds.";
    b.ow = "Sabotage weapons and hack synthetics.\n\nCompromised synthetics fight on your side.\nAffected weapons overheat.";
    b.rw = "Salarian Operative";
    b.sw = "Decrease weight of sniper rifles by {weaponWeightSniper}%.";
    b.tw = "Years spent training as an STG operative are paying off.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.uw = "Scan Radius";
    b.nf = "Seeker Swarm";
    b.xw = "Decrease target movement speed by an additional {enemyMovementSpeed}%.\nIncrease the duration of the slowdown by {powerDuration}%.";
    b.yw = "Upgrade the Seeker Swarm field for 10% damage protection for each active swarm.";
    b.zw = "Increase the number of Seeker Swarms by {seekerSwarm}.";
    b.Aw = "Increase damage by {powerDamage}%.\nDecrease target movement speed by an additional {enemyMovementSpeed}%.\nIncrease the duration of the slowdown by {powerDuration}%.";
    b.Bw = "Summon {seekerSwarm} Seeker Swarms to cloud around you. Use the power again to launch a swarm at your target that deals damage and slows movement.";
    b.Md = "Sentry Turret";
    b.Ew = "Upgrade turret with shock attack to stun enemies.";
    b.Fw = "Upgrade turret with cryo ammo, giving it a chance to freeze enemies for {ATTR_TIME} seconds.";
    b.Gw = "Upgrade turret with armor-piercing ammo, giving it a {powerDamageArmor}% damage bonus against armor.";
    b.Hw = "Upgrade turret with long-range rockets that deal {ATTR_DMG} points of damage across a {radius} meter radius.";
    b.Iw = "Deploy this heavy-weapon turret for cover fire.";
    b.of = "Shadow Strike";
    b.Rw = "Reduce all damage taken by {damageReduction}% for {ATTR_TIME} seconds after decloaking.";
    b.Sw = "Hit your opponent with an electrical attack that does {powerDOT}% additional damage over {ATTR_TIME} seconds.\n\nDetonate this effect with other powers.";
    b.Tw = "Strike shields or barriers to drain their energy to refill your shields.\nIncrease movement speed by {movementSpeed}% for {ATTR_TIME} seconds after decloaking.";
    b.Uw = "Cloak and sneak behind your target to unleash a vicious sword attack.\n\nReceives damage bonuses from sword upgrades.\nConsidered a melee attack.";
    b.Vw = "Shatter";
    b.Xw = "Shield & Barrier";
    b.Eb = "Shield Boost";
    b.Yw = "Reduce the delay before shields start regenerating by {shieldRechargeRate}% for {ATTR_TIME} seconds for you and affected allies.";
    b.Zw = "Increase the duration that shields are restored by {powerDuration}%.";
    b.$w = "Increase shield restoration by {shieldBoostPower}%, causing you and affected allies to take {damageReduction}% less damage for {ATTR_TIME} seconds.\nTotal damage reduction from all sources cannot exceed {ATTR_PCT}%.";
    b.ax = "Repair your shields and those of nearby allies, providing a large initial boost to shields, and then restoring shields every second for {ATTR_TIME} seconds.";
    b.Ph = "Increase shields restored by {shieldBoostPower}%.";
    b.Nd = "Shield Damage";
    b.dx = "Shield Drain";
    b.ex = "Shield Durability";
    b.gx = "Shield Mastery";
    b.hx = "Increase the damage the omni-shield withstands before collapsing by {omniShieldHealth}%.";
    b.ix = "Add a flame effect to your omni-shield. Your shield melees will burn enemies and are highly efective against armor.\n\nAdds a fire effect to impacted targets that does {omniShieldFire}% additional damage over {ATTR_TIME} seconds.\n\nApplies fire DoT.";
    b.jx = "Add a freezing effect to your omni-shield that can chill or freeze enemies.\n\nSnap freeze unprotected enemies.\nSlow shielded and armored targets by {enemyMovementSpeed}%.\nWeaken enemy armor by {enemyArmorWeakening}% for {ATTR_TIME} seconds.";
    b.pf = "Shield Overload";
    b.kx = "Shield Penalty";
    b.lx = "Shield Penetration";
    b.Ha = "Shield Recharge";
    b.px = "Shield Recharge Delay";
    b.ox = "Shield Recharge & Speed";
    b.qx = "Shield Regeneration";
    b.rx = "Shield Restore";
    b.sx = "Shield Restored";
    b.Od = "Shield Strength";
    b.Qh = "Shields";
    b.tx = "Shields & Barrier";
    b.Ub = "Shields & Damage";
    b.ux = "Shields & Duration";
    b.vx = "Shields Per Second";
    b.Rh = "Shields Restored";
    b.Sh = "Shields Restored Per Second";
    b.Oc = "Shock";
    b.Fb = "Shockwave";
    b.yx = "Increase the distance that Shockwave cascades by {rangePct}%.";
    b.zx = "Suspend targets in the air for a short time.";
    b.Ax = "Topple a row of enemies with this cascading shockwave.";
    b.Fx = "Shotgun Damage";
    b.qf = "Shotguns";
    b.Wx = "Shotguns and Assault Rifles";
    b.Xx = "Shrapnel";
    b.Yx = "Shred";
    b.Zx = "Shredder";
    b.rf = "Siege Pulse";
    b.$x = "Each stored charge on your platform reduces all damage taken by 10%.";
    b.ay = "Increase the number of shots fired by {siegeCharge}, and increase the chance of knocking down enemies by {knockdown}%.";
    b.by = "Increase damage done to armor, shields, and barriers by {ATTR_PCT}%.";
    b.cy = "Generate {siegeCharge} electric charges that are stored in your platform's batteries. Use the power again to consume a charge to launch a long-range pulse that blasts a massive area. Each shot has a chance of incapacitating unarmored enemies.\n\nHighly effective against armor, shields, and barriers.";
    b.Pc = "Singularity";
    b.dy = "Inflict {ATTR_DMG} damage per second to lifted targets.";
    b.ey = "Detonate Singularity when the field dies to inflict {ATTR_DMG} damage across {ATTR_INT} meters.";
    b.fy = "Create a sphere of dark energy that traps and dangles enemies caught in its field.";
    b.hy = "Slam";
    b.sf = "Slow";
    b.Pd = "Smash";
    b.iy = "Add a biotic effect to a target that can be detonated.\nIncrease damage by {powerDamage}%.";
    b.jy = "Add an electrical effect to a target that can be detonated.\nIncrease damage by an additional {powerDOT}% for {ATTR_TIME} seconds.";
    b.ky = "Increase radius by {radiusPct}%.\nIncrease the number of targets hit by {areaTargetBonus}.";
    b.ly = "Drive the lash into the ground to cause area-of-effect damage and devastating direct damage.";
    b.jw = "SMGs";
    b.Qd = "Snap Freeze";
    b.my = "Increase the duration of freeze effects by {powerDuration}%.\nDecrease the movement speed of chilled targets by an additional {enemyMovementSpeed}%.";
    b.ny = "Increase damage by {powerDamage}%.\nWeaken armored targets by an additional {enemyArmorWeakening}%.";
    b.oy = "Increase the damage of tech combos by {techCombo}%.";
    b.py = "Flash-freeze unprotected enemies and slow down the rest with a wave of ice damage.\n\nFrozen targets don't regenerate health.\nWeaken armor by {enemyArmorWeakening}%.";
    b.qy = "Sniper & Assault Rifles";
    b.ry = "Sniper Damage";
    b.Ky = "Sniper Rifles";
    b.Ly = "Snipers & Shotguns";
    b.Uh = "Spare Ammo";
    b.My = "Speed & Vision";
    b.Ny = "Speed Boost";
    b.Oy = "Speed Reduction";
    b.Py = "Split Grenade";
    b.Qy = "Squad Command";
    b.Vh = "Stability & Ammo";
    b.Qc = "Stasis";
    b.Ty = "Deal {stasisStrength}% more damage to targets before Stasis breaks.";
    b.Uy = "Use two powers in a row by giving the first power a {ATTR_PCT}% chance to cause no cooldown.";
    b.Vy = "Unleash a Stasis bubble to trap enemies that walk into it.";
    b.Wy = "Increase all damage done to target by {enemyDamageTaken}%.\nDeal {stasisStrength}% more damage to targets before Stasis breaks.";
    b.Xy = "Stop an enemy in its tracks with this powerful mass effect field. No effect on armored targets.\n\nEnemies eventually break out of Stasis after taking major damage.";
    b.Yy = "Stasis Strength";
    b.Rc = "Sticky Grenade";
    b.Zy = "Grenades stay active for {ATTR_TIME} seconds when attached to a wall or surface, exploding when an enemy approaches.\nIncrease impact radius by {radiusPct}%.";
    b.$y = "Stick this grenade to your opponent, and the explosion will tear apart the target and the shrapnel will damage other enemies caught in the blast.";
    b.Rd = "Stimulant Pack";
    b.az = "Increase max shield bonus by {stimpackShieldStrength}%.";
    b.bz = "Increase weapon damage by {stimpackWeaponDamage}% for the duration of the power.";
    b.cz = "Increase max shield bonus by {stimpackShieldStrength}% and melee damage by {stimpackMeleeDamage}% for the duration of the power.";
    b.Wh = "Increase pack capacity by {grenadeCapacity}.";
    b.Xh = "Increase damage bonus by {stimpackDamage}%.";
    b.dz = "A specially designed ops survival pack that temporarily increases survivability and all damage output.\n\nA limited number of these packs can be carried.";
    b.Sd = "Submission Net";
    b.mz = "Incapacitate targets {incapacitateDuration}% longer.";
    b.nz = "Increase damage by {powerDamage}%.\nSlow armored targets by {netMovementSpeed}% for {ATTR_TIME} seconds.";
    b.oz = "Improve the electrified net to deal {netAOE} points of damage across {radius} meters every {ATTR_TIME} seconds.";
    b.pz = "Entangle opponents in an electrified net, dealing massive damage to armored targets and incapacitating unarmored targets as they break free.\n\nTargets build up resistances to the grappling effects of the net.";
    b.tf = "Supply Pylon";
    b.qz = "Increase the radius in which the pylon gives bonuses to allies by {radiusPct}%.";
    b.rz = "Upgrade the tech generator to also increase allied weapon damage by {weaponDamage}%.";
    b.sz = "Upgrade the tech generator to also increase allied power damage by {globalPowerDamage}%.";
    b.uz = "Increase the number of grenades generated by {ATTR_INT}.";
    b.vz = "Increase max shields by an additional {shieldStrength}%.";
    b.wz = "Deploy an immobile pylon that supplies ammo and grenades. A built-in tech generator also increases maximum shields for nearby allies.\n\nOnly one pylon can be active at a time.\nAmmo and grenades expire after {ATTR_TIME}s.";
    b.xz = "Survivability";
    b.yz = "Survival";
    b.Bz = "Sustain";
    b.Cz = "Swarm Count";
    b.Yh = "Sword Damage";
    b.Dz = "Sword Mastery";
    b.Ez = "Increase sword damage by {meleeDamage}% for {ATTR_TIME} seconds after an enemy is killed by a sword attack.";
    b.Fz = "Decrease shield-recharge delay by {shieldRechargeRate}%.\nIncrease movement speed by {movementSpeed}%.";
    b.Gz = "Increase sword damage to shields/barrier by {meleeDamageShield}%.";
    b.Hz = "Increase sword damage to armor by {meleeDamageArmor}%.";
    b.Zh = "Increase sword damage by {meleeDamage}%.";
    b.Iz = "Boost health, shields, melee damage, durability, and movement speed.";
    b.Jz = "T5-V Battlesuit";
    b.Kz = "Upgrade the cutting-edge T5-V Battlesuit.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.Lz = "T5-V Internal Systems";
    b.Mz = "Upgrade the T5-V's internal systems to boost health, shields, melee damage, and durability.";
    b.bb = "Tactical Cloak";
    b.Td = "Increase melee damage by {meleeDamage}% while cloaked.";
    b.Ud = "Fire one power while cloaked and remain hidden.";
    b.Nz = "Increase sniper rifle damage by {tcDamageSniper}% while cloaked.";
    b.Oz = "Shotguns fired during cloak do {tcDamageShotgun}% more damage.";
    b.Pz = "When Tactical Cloak is activated, assault rifles do {tcDamageAssault}% more damage for {ATTR_TIME} seconds.";
    b.Qz = "Increase damage bonus by {globalPowerDamage}%.";
    b.Rz = "Increase power damage by {globalPowerDamage}%.";
    b.Vd = "Become invisible.\n\nGain a massive damage bonus when breaking from cloak to attack.";
    b.Sc = "Tactical Scan";
    b.Vz = "Increase all weapon damage done to the target by {enemyWeaponDamageTaken}%.";
    b.Wz = "Increase all power damage done to the target by {enemyPowerDamageTaken}%.";
    b.Xz = "This evolution is bugged and doesn't work.";
    b.Yz = "Increase the target's movement speed penalty by {enemyMovementSpeed}%.";
    b.Zz = "Increase all damage done to the target by {enemyDamageTaken}%.";
    b.$z = "Increase scan duration by {powerDuration}%.\nMomentarily reveal enemies within {ATTR_INT} meters of the target with an initial scanning pulse.";
    b.aA = "Reveal weaknesses in defenses, increasing all damage done to the target and slowing its movement speed.\n\nProvide the entire squad with a tactical readout. Only one scan can be active on a target.";
    b.Gb = "Tech Armor";
    b.eA = "Increase recharge speed after armor detonation by {rechargeSpeed}%.";
    b.fA = "Increase power damage and force by {globalPowerDamage}% while armor is active.";
    b.gA = "Increase melee damage by {meleeDamage}% while the power is active.";
    b.ai = "Increase detonation damage by {powerDamage}%.\nIncrease impact radius by {radiusPct}%.";
    b.hA = "Protect yourself with this holographic armor or detonate it to damage nearby enemies.\n\nSlows power use by {globalRecharge}%.";
    b.bi = "Increase damage protection by an additional {damageReduction}%.";
    b.iA = "Tech Combo";
    b.jA = "Tech Damage";
    b.kA = "Tech Vulnerability";
    b.nc = "Throw";
    b.nA = "Reset recharge time after a biotic combo detonates.";
    b.oA = "Increase force by {powerForce}%, and do an additional {ATTR_DMG} damage on impact.";
    b.pA = "Toss your enemy through the air with this biotic blast.";
    b.wA = "Turian Veteran";
    b.xA = "Seasoned by years of hard fighting across the galaxy, combat skills come into their own.\n\nMore weapon damage.\nGreater stability and weapon control.\nMore strength.";
    b.ci = "Turret Damage";
    b.di = "Upgrade turret with a close-range flamethrower that deals {ATTR_DMG} points of damage per second.";
    b.ei = "Turret Shields";
    b.RB = "Unshackled A.I.";
    b.SB = "An infiltration unit designed for close-quarters combat.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.TB = "Unstable Dark Sphere";
    b.VB = "Vengeful Ancient";
    b.WB = "Increase weapon damage bonus by {weaponDamage}%.\nIncrease Collector and Prothean weapon damage bonus by {protheanWeaponDamage}%.";
    b.XB = "Boost biotic and offensive abilities.\nIncrease Collector and Prothean weapon damage.";
    b.YB = "Venom Gauntlets";
    b.ZB = "Boost health, shields, melee damage, and durability.\n\n{ATTR_PCT} of melee damage is applied as poison damage over {ATTR_TIME} seconds.";
    b.fC = "Volus Training";
    b.gC = "Increase the amount of shields restored by Shield Boost by {shieldBoostPassive}%.";
    b.hC = "Upgrades to the advanced power armor suit provide enhanced combat abilities.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.jC = "Vorcha Resilience";
    b.kC = "Reduce the weight of shotguns and assault rifles by {weaponWeightAssault}%.";
    b.lC = "A vorcha's adaptable nature gives them advantages in combat.\n\nMore power damage.\nMore weapon damage.\nMore strength.";
    b.oC = "Vulnerability";
    b.uC = "Warlord Rage";
    b.fb = "Warp";
    b.vC = "Increase force, damage, and impact radius of combo detonations by {comboDamage}%.";
    b.wC = "Increase weapon damage taken by a target by {enemyWeaponDamageTaken}%.\nIncrease power damage taken by a target by {enemyPowerDamageTaken}% for {ATTR_TIME} seconds.";
    b.xC = "Increase damage to barriers and armor by {powerDamageArmor}%.\nWeaken armored targets by an additional {enemyArmorWeakening}%.";
    b.yC = "Rip your enemy apart at a molecular level.\n\nStop targeted enemy from regenerating health.\nWeaken armor.\n\nApplies fire DoT.";
    b.zC = "Warp Effect";
    b.qi = "Weapon Accuracy";
    b.n = "Weapon Damage";
    b.CC = "Weapon Damage & Max Grenades";
    b.Ff = "Weapon Stability";
    b.Gf = "Weapon Synergy";
    b.nb = "Weapon Weight";
    b.DC = "Weight Capacity";
    b.Xi = "Adas Anti-Synthetic Rifle";
    b.Yi = 'Named in memory of the quarians killed in the Morning War on the planet Adas, this weapon\'s electrical attack has been optimized for medium- to long-range firefights. Alliance marines take issue with calling it a "rifle" since, technically, it has no rifling in its barrel. The quarians shrug this off, as quarian weapon terminology rarely translates flawlessly into human languages.';
    b.Gl = "Cerberus Harrier";
    b.Hl = "These Cerberus-modified Mattock rifles are fully automatic. Cerberus gunsmiths reined in the recoil issues, resulting in a gun that stays on target but delivers slightly less punch per round than a standard Mattock. As such, the weapon is typically utilized by Cerberus's elite troopers who train constantly to make every burst count.";
    b.Ql = "Collector Rifle";
    b.Rl = "The Collector's main weapon uses the same principles as a human assault rifle, but its organic components clearly set it apart. Its power source appears to be an internal organ with biotic capacitance; its ammunition resembles pellets of metallic enamel that tear through enemies with deadly efficiency.";
    b.lp = "Geth Pulse Rifle";
    b.mp = "Geth pulse rifles are comparable to a standard stock assault rifle, but finely balanced with low-recoil and incredibly high accuracy. The pulse rifle fires a rapid stream of light-weight slugs which are wrapped in a phasic envelope to increase their damage.";
    b.pp = "Geth Spitfire";
    b.qp = "This fully automatic weapon fires charged projectiles that break apart and create plasm on impact. Holding down the trigger causes it to steadily increase its rate of fire. Designed by geth, it is very effective against shields and synthetic targets. However, the significant mass of the weapon makes it difficult to carry, slowing movement speed.";
    b.Ar = "M-15 Vindicator";
    b.Br = "A battle rifle that fires in three-round bursts. Favored by assassins and elite mercenaries, and deadly at any range. Manufactured by Elanus Risk Control Services for the Blue Suns mercenary group, the Vindicator is popular in the Terminus Systems.";
    b.Qr = "M-37 Falcon";
    b.Rr = "This Alliance rifle launches 25mm mini-grenades. Lighter and more accurate than most grenade launchers, the Falcon burns through specialized ammunition as well as standard thermal clips. A field fabrication kit generates this ammunition, leaving the clips as the rifle's only limitation.";
    b.Wr = "M-55 Argus";
    b.Xr = "The Argus is a high-powered rifle favored by senior C-sec officers. An excellent close-range weapon, its bursts of fire ensure ammunition conservation during lengthy conflicts. Other law-enforcement agencies across the galaxy are adopting the Argus as their standard rifle, as much for its intimidation factor as its suppression power.";
    b.bs = "M-76 Revenant";
    b.cs = "The M-76 Revenant unleashes a storm of high-velocity slugs. It has low accuracy but a high thermal clip capacity, and packs considerable firepower. This custom-made machine gun features technology not widely available. Protected against replication by sophisticated Fabrication Rights Management (FRM) technology, only the richest and most powerful warlords can afford the Revenant.";
    b.fs = "M-7 Lancer";
    b.gs = "The M7-Lancer is a rare collector's item that was introduced shortly after the First Contact War. The Lancer has been refurbished by an unknown master weaponsmith, and it now uses the higher velocity rounds of today's weaponry. It does not need heat sinks, instead utilizing weapon heat-generation from an earlier era. Few of these finely crafted weapons are in existence.";
    b.hs = "M-8 Avenger";
    b.js = "The Avenger is a common, versatile, military-grade assault rifle manufactured by the Elkoss Combine. It's accurate when fired in short bursts, and deadly when fired on full auto. The modular design and inexpensive components of the Avenger make it a favorite of military groups and mercenaries alike. The rifle has a reputation for being tough, reliable, easy to use, and easy to upgrade.";
    b.os = "M-96 Mattock";
    b.ps = "Medium-range, semi-automatic rifle. The Mattock is a hybrid weapon with an assault rifle's low heat production and a sniper rifle's punch. Marksmen favor its increased power over that of an assault rifle to bring down hardened targets. Its lack of a full-auto setting is advertised as a feature rather than a shortcoming as it curbs a soldier's tendency to spray inaccurate fire under stress.";
    b.us = "M-99 Saber";
    b.vs = 'A heavy-duty semi-automatic rifle favored by only the most elite marksman, the M-99 Saber is jokingly referred to as "The Big Iron" for its sheer stopping power. Each M-99 Saber is designed specifically for its owner, making it one of the Alliance\'s more expensive weapons.';
    b.et = "N7 Typhoon";
    b.ft = "The Typhoon is a distinctive light machine gun featuring a face shield to protect the shooter from headshots. Its power and recoil are so notorious that it includes a high-tech kinetic reducer to fight muzzle climb. Since the reducer tries to limit all motion by the weapon, marksmen do not engage it while moving and instead reduce the recoil only while they are in cover.";
    b.it = "N7 Valkyrie";
    b.jt = "After the carnage of the Battle of the Citadel, Alliance officers commissioned a new rifle for their ground forces. A variation of the popular Avenger design, the Valkyrie is now standard issue for new recruits. Exceptionally well-crafted, accurate, and packing ample firepower, the rifle is a hot black-market item when it surfaces.";
    b.Ot = "Particle Rifle";
    b.Pt = "After the Reapers obliterated the Prothean Empire's warships, the Prothean resistance was forced to develop weapons that did not rely on intact supply lines. The Prothean Particle Rifle is a stripped-down, powerful assault rifle modified to fire without thermal clips or specialized ammunition. Alliance scientists agree that it appears to share some principles with the Collectors' particle beam weapon, although this gun requires a temporary cool-down period if it overheats. An amalgam of two different eras of technology, the particle rifle is still a deadly, efficient weapon.";
    b.Qt = "Phaeston";
    b.Rt = "Named after a turian spirit of creation, the Phaeston was engineered to provide the best possible balance between accuracy and firepower in a machine gun. Each shot is tempered by kickback dampeners inside the shoulder stock, which lets the Phaeston pack more punch than other weapons its size without sacrificing precision. Its fully automatic fire and relatively light weight has turned the Phaeston into the turian infantry's primary go-to weapon.";
    b.gz = "Striker Assault Rifle";
    b.hz = "The Striker is a fully-automatic weapon that functions more as a grenade launcher than a rifle, firing high-impact slugs that detonate on contact. The weapon increases its rate of fire the longer the trigger is held, which is devastating if the weapon can be kept on-target. In an attempt to market the Striker outside of the Krogan DMZ, the gun was designed to be fired by non-krogan, but its recoil tends to off-balance smaller species. Enthusiasts point out that the target on the receiving end of a Striker has far worse things to worry about than its shooter's balance.";
    b.Si = "Acolyte";
    b.Ti = "Designed for asari resistance, the Acolyte's barrels fire advanced ammunition similar to that of an impact-triggered resonant warp bomb, which has a devastating effect on shields and biotic barriers. The specialized nature of the warp field means it does not pierce armor as effectively, but the shooter's biotics are expected to make up for this shortcoming.";
    b.vj = "Arc Pistol";
    b.wj = "An innovation of Admiral Daro'Xen, the Arc Pistol is a scaled-down Arc Projector that only requires thermal clips, to solve its power problems. The Arc Pistol uses a nonvisible laser to ionize the air and create a path for a high-ampere electric shock. For a more damaging blast, it can be charged up.";
    b.bo = "Executioner Pistol";
    b.co = "Invented by Blood Pack weapons experts, the first Executioner was improvised using spare parts and scrap metal during an Omega territory dispute. The result was a hand-held cannon able to fire high-impact armor-piercing slugs, although only one at a time due to its limited heatsink. Many Blood Pack mercs carry an Executioner as backup in case they get pinned down, but some enthusiasts prefer it as their primary gun, sticking to the one-shot-one-kill approach.";
    b.sr = "M-11 Suppressor";
    b.tr = "The M-11 Suppressor is the product of the Alliance's Offensive Handgun Project that developed an infiltration weapon to be used in close-quarters situations where silence is key. The Suppressor features a built-in integral sound moderator that reduces noise and muzzle flash. Civilian variants on the weapon are considered illegal but can be found in some sectors.";
    b.Or = "M-358 Talon";
    b.Pr = "The Talon is a close-range pistol favored by Cerberus Guardians. Firing heavy-gauge shotgun pellets, it delivers massive trauma to unarmored targets. Its waste heat is sufficiently excessive that it carries six separate ammunition blocks, rotating like a twentieth-century revolver to prevent shaver jam or misfire due to premature melting of the shot.";
    b.Sr = "M-3 Predator";
    b.Tr = "A reliable, accurate sidearm. Manufactured by Elanus Risk Control, the Predator is valued as a powerful, deadly, and relatively inexpensive weapon. While it is not generally deployed in the military, it's still very popular in the Terminus Systems.";
    b.Yr = "M-5 Phalanx";
    b.Zr = "The M-5 Phalanx is the product of the Alliance's Offensive Handgun Project, a close-in weapon to be used with no loss of stopping power in comparison with a soldier's assault rifle. The Phalanx enjoys a ballistics advantage over most heavy pistols. Civilian variants are often purchased by colonists on planets that have particularly dangerous big-game animals.";
    b.$r = "M-6 Carnifex";
    b.as = 'A highly accurate and lethal pistol. The Carnifex is a favored sidearm of mercenary leaders and Eclipse mercenary tech specialists. An expensive but powerful weapon, its marketing materials feature a charging krogan with the slogan "Don\'t you wish Carnifex was at your side?"';
    b.ds = "M-77 Paladin";
    b.es = "The Paladin is a reliable, durable weapon developed by law enforcement looking for a high-powered but easily concealed sidearm for undercover agents. Surprisingly small for its hitting power, the Paladin is a variant on the Carnifex pistol. While it has a smaller clip than the Carnifex, its shots are unquestionably more powerful.";
    b.Zs = "N7 Eagle";
    b.$s = "When the Alliance's Offensive Handgun Project received funding to update one of its designs, its engineers chose to redesign the already impressive Phalanx pistol. Like its predecessor, the Eagle is a compact, fully automatic pistol that delivers unprecedented accuracy and punch with a rapid firing rate. The Eagle is named after the Desert Eagle, a classic handgun which gained a romantic reputation among gun collectors, thanks to its popularity in 20th- and 21st-century Earth action movies.";
    b.ct = "N7 Piranha";
    b.dt = "The N7 Piranha is an assault shotgun designed for the Reaper war. When the N7 program began training alien resistance forces, the lighter-bodied species wanted a low-recoil weapon with a wide pellet spread for dealing with hordes of husks. The result was the Piranha, which hit a sweet spot in close-range firepower. Its rapid-fire capability tears apart not only husks but most opponents unlucky enough to be in its way.";
    b.vw = "Scorpion";
    b.ww = "Originally issued to the salarian STG to allow small units to contain much larger enemy forces, the Scorpion pistol now sees service galaxy-wide. It fires low-velocity, squash-head projectiles with a dual use. The high-explosive filler within the projectiles contains an adhesive that secures the projectile to the target on impact. When fired into a surface, it turns into a proximity mine.";
    b.Pi = "AT-12 Raider";
    b.Qi = "Carried by the batarian military's notorious Special Intervention Unit, the Raider is a semi-automatic shotgun that loads slowly but fires rapidly, with tremendous force. Short-range even for a shotgun, the Raider has a large pellet spread. Rather than eliminating recoil, its integral compensators instead make it predictable and vertical.";
    b.jn = "Disciple";
    b.kn = "Originally handcrafted for the exclusive use of justicars, the Disciple Shotgun's schematics were finally released to asari commandos after centuries of negotiation. The Disciple uses shells packed with microscale submunitions to deal staggering amounts of damage. Even shielded enemies are stunned by the force of a blast from this weapon.";
    b.jp = "Geth Plasma Shotgun";
    b.kp = "This three-barreled geth weapon fires miniature but potent cluster rounds of superconducting projectiles and has a longer range than standard shotguns. A two-stage trigger system allows for either quick-fire capacitors or a charge-and-release attack to electrify the projectiles as they exit the weapon. As the rounds hit the target, they fragment and electricity arcs between the pieces, flash-converting the air to conductive plasma. The resulting impact, heat, and electrical charge overloads shields and barriers and causes massive trauma to unarmored targets.";
    b.yp = "Graal Spike Thrower";
    b.zp = "The Graal is one of a long line of krogan weapons used to hunt thresher maws. Its ammunition consists of oversized flechettes meant to pierce thresher hide and create deep wound channels leading to massive blood loss. For additional firepower, the weapon is double-barreled, and, as a last resort, possesses blades to cause internal injuries if the wielder is swallowed by the thresher. Using a Graal on a humanoid target has predictably grisly effects. Its shots can be charged for more damage.";
    b.ur = "M-11 Wraith";
    b.vr = 'The Wraith is favored among mercenaries, pirates, and slavers in the Terminus systems. Its high-impact damage and sturdy construction make it a popular "quick-draw" shotgun. A variant of the M-22 Eviscerator, demand for the Wraith is higher than ever, even though the weapon is banned in Citadel space. In order to lighten its weight, the Wraith holds fewer shots than the Eviscerator.';
    b.Cr = "M-22 Eviscerator";
    b.Dr = 'The Lieberschaft 2180 shotgun, or "Eviscerator," is of human civilian design and has a unique ammunition generator. Where most modern firearms shave off chips or pellets from an ammunition block, the M-22 shaves off serrated metal edges designed to fly aerodynamically. This dramatically improves its armor-piercing capabilities, and its tight grouping ensures lethality at longer ranges than standard shotguns. This design violates several intergalactic weapons treaties, so the M-22 is not distributed to militaries.';
    b.Er = "M-23 Katana";
    b.Fr = "Manufactured by Ariake Technologies, the Katana is a common mercenary weapon, and is also popular on colonies with Varren infestations. It's deadly at short range, but ineffective at long range.";
    b.Ir = "M-27 Scimitar";
    b.Jr = "Manufactured by Ariake Technologies, the Scimitar features twin mass effect generators, giving it a more rapid rate of fire than a traditional shotgun. This weapon was created for the Eclipse mercenary band, but is rapidly becoming popular with Blood Pack Trooper mercs as well.";
    b.Mr = "M-300 Claymore";
    b.Nr = "The Claymore used to be a hard-hitting but poor-selling shotgun due to kickback problems snapping the arms of anyone but krogan firing the weapon. After a rehaul of its kinetic dampening system, the Claymore is being rolled out again. As a way to lure back customers, the gun's manufacturer has lowered the shotgun's selling price without skimping on its stopping-power.";
    b.Ts = "N7 Crusader";
    b.Us = "Bruised and bloody Alliance marines on Torfan attributed their survival against waves of batarian mercenaries to the precision and stopping power of the Crusader. With a design patterned on riot shotguns, this weapon has a moderate rate of fire that rewards careful aiming. Since this accuracy provides little room for error, the Crusader is primarily used by highly trained soldiers.";
    b.Av = "Reegar Carbine";
    b.Bv = "This electrical weapon improves upon the arc pistol's design by generating a sustained current on its target. This weapon is named for the quarian Reegar family, whose marines have served valiantly against the geth.";
    b.$B = "Venom Shotgun";
    b.aC = "The Venom shotgun was developed by the salarian Special Tasks Group to meet the unpredictable needs of those stationed in hostile areas. The double barrel fires ammunition that detonates on impact, while a third barrel below can be charged to fire a round of microgrenades. Given the nature of most STG assignments, the Venom was designed to force an exit strategy and was issued to teams whose primary objective was to extract compromised undercover operatives. The shotgun is now issued to frontline soldiers in the war against the Reapers.";
    b.ol = "Blood Pack Punisher";
    b.pl = "The Punisher features a secondary barrel that fires one armor-piercing round per main-barrel burst. It was developed by Blood Pack gunsmiths who found that their vorcha recruits frequently forgot to optimize ammo loads in the heat of combat. This configuration makes the process automatic and highly effective at penetrating armor.";
    b.Sl = "Collector SMG";
    b.Tl = "This short weapon is a hybrid of mechanical and organic parts, some more advanced than the Collector assault rifle. It vents heat automatically rather than requiring thermal clips and, when wielded by a Collector, extends a neural link to their skin at the wrist. Its ammunition is effective against armor and low recoil makes it a good weapon for sustained suppression.";
    b.hp = "Geth Plasma SMG";
    b.ip = "This submachine gun works on the same principles as the Spitfire: it shoots superconducting toroids that break apart on impact, retaining an electrical charge that flash-converts the shrapnel into plasma. Unlike the Spitfire, however, this smaller geth weapon has been modified to take thermal clips. Holding down the trigger speeds up its rate of fire, rapidly depleting the gun's heat sink in exchange for nearly continuous fire.";
    b.wr = "M-12 Locust";
    b.xr = "The Kassa Fabrications Model-12 Locust is a compact submachine gun developed for the Alliance but now favored by gang enforcers and hit men. Featuring a complex recoil-reducing mechanism and high-grade auto-targeting software, the Locust delivers longer range, more accurate fire than others in its class.";
    b.Gr = "M-25 Hornet";
    b.Hr = "The Hornet is a long-range submachine gun created by Cerberus. It is standard issue for Cerberus troops, who are trained to handle the recoil from the gun's three-round bursts. Cerberus designed the Hornet to conserve ammunition and provide cover-fire during prolonged conflicts.";
    b.Ur = "M-4 Shuriken";
    b.Vr = "As kinetic barriers have grown in popularity, so has the popularity of submachine guns. Manufactured by the Elkoss Combine, the Shuriken Machine Pistol fires six-round bursts with a high rate of fire.";
    b.ws = "M-9 Tempest";
    b.xs = "Produced by Elanus Risk Control Services for the Eclipse mercenary band, the Tempest is an expensive but deadly addition to anyone's personal arsenal. This fully automatic submachine gun is punishing up close, but becomes less accurate at long range.";
    b.at = "N7 Hurricane";
    b.bt = "While some militaries pass on the Hurricane because of its lower accuracy, the Alliance feels the gun's rapid firing rate offers excellent suppressive fire. A disciplined marksman can use the fully automatic submachine gun to chew through targets with alarming speed. Alliance officers were so pleased with field results that the Hurricane is now many squadrons' standard-issue SMG.";
    b.gl = "Black Widow";
    b.hl = "The Alliance wanted to reduce the reload time of the original Widow rifle, without sacrificing its stopping power. The solution was to increase the number of shots the gun could fire before it needed a fresh thermal clip. Heavy for a sniper rifle, the Black Widow's firepower more than compensates for its encumbrance.";
    b.Ul = "Collector Sniper Rifle";
    b.Vl = "This weapon's long-range particle beam is capable of sustained fire, allowing it to switch between anti-personnel or anti-materiel roles just by holding down the trigger. This rifle does not accept thermal clips, instead cooling down by venting heat into a liquid-containing sleeve that radiates it through the fin-like protuberances on its barrel.";
    b.Tq = "Javelin";
    b.Uq = "Called the Javelin by Alliance marines, this geth weapon holds a reservoir of ferrofluid, magnetically drawn into the firing chamber and expelled at lethal speeds. Like a high-pressure water-jet, the ferrofluid cuts through nearly anything it hits with so much heat that it resembles a beam of light, causing terrible wounds.";
    b.Yq = "Kishock Harpoon Gun";
    b.Zq = 'An Alliance captain on her fifth tour of the Terminus Systems once said that seeing a Kishock was the easiest way to tell if she was being attacked by batarian mercenaries or slavers, since "no bastard with a Kishock means to take you alive." This powerful sniper rifle fires a harpoon-like spike that causes massive internal bleeding, and its miniaturized disruptors will also destroy synthetics. The rifle\'s biggest drawback is that it must be reloaded after every shot, but for those with steady aim and good timing, one shot is enough.';
    b.fr = "Krysae Sniper Rifle";
    b.gr = "This turian antimateriel rifle is modified to kill Reaper enemies. The Krysae's scope uses a rangefinder that adjusts to keep the target in proper proportion to the shooter, which comes in useful when the sniper is forced into close range. Its specialized ammunition is both armor-piercing and explosive. In a desperate move, the turians released its specifications over the extranet so that nearly anyone with a fabricator could manufacture this weapon to help the war effort.";
    b.yr = "M-13 Raptor";
    b.zr = "The Raptor is a human version of a turian weapon developed for conflict on the low-gravity world Amar. Fighting at longer ranges than expected, the turians optimized a low-recoil, semi-automatic rifle with a scope, and issued it to their regular infantry, creating a hybrid weapon that was half-assault rifle and half-sniper weapon. Cerberus assigns the Raptor to Nemesis snipers.";
    b.Kr = "M-29 Incisor";
    b.Lr = "The Incisor is a sniper rifle designed to overload active defenses. Firing three rounds with each pull of the trigger, the Incisor was initially advertised as having negligible recoil, although under real combat conditions the second and third rounds frequently climb in difficulty. The noise of the burst is comparable to a single rifle shot in duration, making it no easier to locate the sniper by sound.";
    b.ks = "M-90 Indra";
    b.ls = "The Indra's low-powered scope leaves it most effective at medium range, but many soldiers believe this limitation is offset by the gun's rapid rate of fire. The Indra is the first military-grade, fully automatic sniper rifle. It has an extremely efficient heat-sink system that allows a surprisingly large number of shots to be fired before the weapon ejects its thermal clip.";
    b.ms = "M-92 Mantis";
    b.ns = "The Mantis is a powerful sniper rifle which is able to take out most targets in a single shot. It's incredibly accurate at long range, but rate of fire is slow. Manufactured by Devlon Industries, the Mantis is primarily used by police and planetary militia groups.";
    b.qs = "M-97 Viper";
    b.rs = "The Viper is a semi-automatic, rapid-fire sniper rifle manufactured by Rosenkov Materials. Rosenkov developed a patented automated-release system that assists with thermal-clip ejection, shortening the Viper's reload time. This rifle is popular with military snipers, who appreciate a long-range gun that can snap off multiple shots in the blink of an eye.";
    b.ss = "M-98 Widow";
    b.ts = "Several research firms spent a considerable fortune trying to redesign the Widow sniper rifle. Their goal was to retain the geth weapon's considerable firepower while reducing its recoil, so that the gun could be fired without breaking a nonsynthetic's arm. After much trial and error, one company finally produced a usable model rolled out to the galactic market.";
    b.gt = "N7 Valiant";
    b.ht = "The Valiant is a sniper rifle tested by Alliance soldiers during a series of harsh survival exercises on the planet Kruljaven. This streamlined weapon employs a sophisticated fire-control system that improves accuracy by stabilizing the barrel during targeting. Although this comes at the cost of reduced capacity and rate of fire, most soldiers find the increase in precision and quick reloading time a worthy tradeoff.";
    b.xi = "Assault Rifle Extended Barrel";
    b.yi = "Increases damage by {weaponDamageAssault}%.\n\nLengthens barrel, creating greater bullet velocity and impact.";
    b.zi = "Assault Rifle High-Velocity Barrel";
    b.Ai = "Allow bullets to pierce {penetration}-meter thick objects but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of an armored target's defenses.\nIncrease weapon weight by {modWeightAssault}%.\n\nSuperior kinetic coils increase shot penetration.";
    b.Bi = "Assault Rifle Magazine Upgrade";
    b.Ci = "Increases rounds per magazine by {magazineSize}%.\n\nIncreases magazine capacity, allowing more shots before reload.";
    b.Di = "Assault Rifle Omni-Blade";
    b.Ei = "Increase melee damage by {modMeleeDamage}%.\n\nAttach an omni-blade to the weapon for increased melee damage.";
    b.Fi = "Assault Rifle Piercing Mod";
    b.Gi = "Allows bullets to pierce {penetration}-meter thick objects, but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of defenses on armored targets.\n\nCapacitor boosts kinetic coil generators, increasing shot penetration.";
    b.Hi = "Assault Rifle Precision Scope";
    b.Ii = "Increases accuracy by {accuracy}%.\n\nSimple 4x optical scope to enhance stability while zoomed. Increases accuracy while moving and taking damage.";
    b.Ji = "Assault Rifle Stability Damper";
    b.Ki = "Increases weapon stability by {stability}%.\n\nDistributes recoil with sliding system of counterweights compatible with kinetic coil generators. Reduces weapon kickback.";
    b.Li = "Assault Rifle Thermal Scope";
    b.Mi = "Increase accuracy by {accuracy}%.\nIncrease weapon weight by {modWeightAssault}%.\n\nReveal enemies through walls and smoke with a 4x optical scope and enhance stability and accuracy while zoomed.";
    b.Ni = "Assault Rifle Ultralight Materials";
    b.Oi = "Reduces weapon weight by {modULMAssault}%.\n\nSuperior lightweight alloys replace weapon parts, making weapon less obtrusive and easier to handle.";
    b.bu = "Pistol Cranial Trauma System";
    b.cu = "Increase headshot damage by {headshotMod}%.\n\nIncrease headshot lethality by balancing barrel calibration so that ammunition pierces bone and explodes in soft tissue.";
    b.du = "Pistol Heavy Barrel";
    b.eu = "Increase damage by {weaponDamagePistol}%.\nIncrease weapon weight by {modWeightPistol}%.\n\nA pistol barrel that produces and withstands extreme kinetic and thermal energy.";
    b.fu = "Pistol High-Caliber Barrel";
    b.gu = "Increases damage by {weaponDamagePistol}%.\n\nAllows wider projectiles, causing more trauma on impact. Ballistically optimized to maintain penetrative power.";
    b.hu = "Pistol Magazine Upgrade";
    b.iu = "Increases rounds per magazine by {magazineSize}%.\n\nIncreases magazine capacity, allowing more shots before reload.";
    b.ju = "Pistol Melee Stunner";
    b.ku = "Increases melee damage by {modMeleeDamage}%.\n\nSmall attachment to muzzle, causing massive damage to meleed targets.";
    b.lu = "Pistol Piercing Mod";
    b.mu = "Allows bullets to pierce {penetration}-meter thick objects, but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of defenses on armored targets.\n\nCapacitor boosts kinetic coil generators, increasing shot penetration.";
    b.nu = "Pistol Power Magnifier";
    b.ou = "Increase power damage by {globalPowerDamage}%.\n\nGenerator designed to enhance the effectiveness of tech or biotic attacks.";
    b.ru = "Pistol Scope";
    b.su = "Increases accuracy by {accuracy}%.\n\nSimple 2x optical scope enhances stability while zoomed. Increases accuracy while moving and taking damage.";
    b.PB = "Ultralight Pistol Materials";
    b.QB = "Reduce weapon weight by {modULMPistol}%.\n\nSuperior lightweight alloys replace weapon parts, making the weapon less obtrusive and easier to handle.";
    b.Dx = "Shotgun Blade Attachment";
    b.Ex = "Increases melee damage by {modMeleeDamage}%.\n\nTungsten carbide bayonet with recessed edge for increased melee damage.";
    b.Gx = "Shotgun High Caliber Barrel";
    b.Hx = "Increases damage by {weaponDamageShotgun}%.\n\nAllows wider projectiles, causing more trauma on impact. Ballistically optimized to retain penetrative power.";
    b.Ix = "Shotgun High Velocity Barrel";
    b.Jx = "Increase damage by {weaponDamageShotgun}% and allow bullets to pierce {penetration}-meter thick objects but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of an armored target's defenses.\nIncreases weapon weight by {modWeightShotgun}%.\n\nSuperior kinetic coils increase shot penetration.";
    b.Kx = "Shotgun Omni-Blade";
    b.Lx = "Increase melee damage by {modMeleeDamage}%.\nIncrease weapon weight by {modWeightShotgun}%.\n\nAttach an omni-blade to the weapon for increased melee damage.";
    b.Ox = "Shotgun Shredder Mod";
    b.Px = "Allow bullets to pierce {penetration}-meter thick objects, but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of defenses on armored targets.\n\nCapacitor boosts kinetic coil generators, increasing shot penetration.";
    b.Qx = "Shotgun Smart Choke";
    b.Rx = "Increases accuracy by {accuracy}%.\n\nServo motors hooked up to adjustable system tighten or loosen pellet spread for maximum accuracy.";
    b.Sx = "Shotgun Spare Thermal Clip";
    b.Tx = "Increases spare shot capacity by {ammoCapacity}%.\n\nAdds sockets to raise thermal clip capacity, increasing number of spare shots.";
    b.Ux = "Shotgun Ultralight Materials";
    b.Vx = "Reduces weapon weight by {modULMShotgun}%.\n\nSuperior lightweight alloys replace weapon parts, making weapon less obtrusive and easier to handle.";
    b.Sv = "SMG Heat Sink";
    b.Tv = "Every round has a {heatSink}% change of not using up the thermal clip.\n\nIncreases heat conductivity of thermal clip receiver. Negates heat generated by some shots.";
    b.Uv = "SMG High Caliber Barrel";
    b.Vv = "Increases damage by {weaponDamageSMG}%.\n\nAllows wider projectiles, causing more trauma on impact. Ballistically optimized to retain penetrative power.";
    b.Wv = "SMG High-Velocity Barrel";
    b.Xv = "Allow bullets to pierce {penetration}-meter thick object but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of an armored target's defenses.\n\nSuperior kinetic coils increase shot penetration.";
    b.Yv = "SMG Magazine Upgrade";
    b.Zv = "Increases rounds per magazine by {magazineSize}%.\n\nIncreases magazine capacity, allowing more shots before reload.";
    b.$v = "SMG Power Magnifier";
    b.aw = "Increase power damage by {globalPowerDamage}%.\n\nGenerator designed to enhance the effectiveness of tech or biotic attacks.";
    b.dw = "SMG Recoil System";
    b.ew = "Increase weapon stability by {stability}%.\n\nIncrease weapon mass for a split second per shot by using an expert timing-VI to reduce weapon kick and improve aim.";
    b.fw = "SMG Scope";
    b.gw = "Increases accuracy by {accuracy}%.\n\nSimple 2x optical scope enhances stability while zoomed. Increases accuracy while moving and taking damage.";
    b.hw = "SMG Ultralight Materials";
    b.iw = "Reduces weapon weight by {modULMSMG}%.\n\nSuperior lightweight alloys replace weapon parts, making weapon less obtrusive and easier to handle.";
    b.uy = "Sniper Rifle Enhanced Scope";
    b.vy = "Increases accuracy by {accuracy}% and helps aim through smoke.\n\nStability-enhancing scope increases accuracy while moving and taking damage. Highlights targets through smoke.";
    b.wy = "Sniper Rifle Extended Barrel";
    b.xy = "Increases damage by {weaponDamageSniper}%.\n\nLengthens barrel, creating greater bullet velocity and impact.";
    b.yy = "Sniper Rifle High-Velocity Barrel";
    b.zy = "Increase damage by {weaponDamageSniper}% and allow bullets to pierce {penetration}-meter thick objects but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of an armored target's defenses.\nIncrease weapon weight by {modWeightSniper}%.\n\nSuperior kinetic coils increase shot penetration.";
    b.Ay = "Sniper Rifle Piercing Mod";
    b.By = "Allows bullets to pierce {penetration}-meter thick objects, but at {pierceDamage}% reduced damage.\nIgnores {enemyArmorPenetration}% of defenses on armored targets.\n\nCapacitor boosts kinetic coil generators, increasing shot penetration.";
    b.Ey = "Sniper Rifle Spare Thermal Clip";
    b.Fy = "Increases spare shot capacity by {ammoCapacity}%.\n\nAdds sockets to increase thermal clip capacity, increasing number of spare shots.";
    b.Gy = "Sniper Rifle Thermal Scope";
    b.Hy = "Increase accuracy by {accuracy}%.\nIncrease weapon weight by {modWeightSniper}%.\n\nReveal enemies through walls and smoke with a 4x optical scope and enhance stability and accuracy while zoomed.";
    b.Iy = "Sniper Rifle Ultralight Materials";
    b.Jy = "Reduces weapon weight by {modULMSniper}%.\n\nSuperior lightweight alloys replace weapon parts, making weapon less obtrusive and easier to handle.";
    b.Zi = "Adrenaline Module";
    b.$i = "Applies a +{movementSpeed}% movement speed bonus for one mission.";
    b.um = "Cyclonic Modulator";
    b.vm = "Applies a +{shieldStrength}% shield bonus for one mission.";
    b.Au = "Power Amplifier Module";
    b.Bu = "Applies a +{globalPowerDamage}% power damage bonus for one mission.";
    b.Du = "Power Efficiency Module";
    b.Eu = "Applies a +{globalRecharge}% power recharge speed bonus for one mission.";
    b.mx = "Shield Power Cells";
    b.nx = "Applies level {ATTR_INT} power cells to your shields, shortening the delay before they recharge. Lasts for one mission.";
    b.Ry = "Stabilization Module";
    b.Sy = "Applies a level {ATTR_INT} stabilization module to your weapon(s) for one mission.";
    b.ek = "Assault Rifle Rail Amp";
    b.fk = "Applies +{weaponDamageAssault}% assault rifle damage for one mission.";
    b.pu = "Pistol Rail Amp";
    b.qu = "Applies +{weaponDamagePistol}% pistol damage for one mission.";
    b.bw = "SMG Rail Amp";
    b.cw = "Applies +{weaponDamageSMG}% SMG damage for one mission.";
    b.Mx = "Shotgun Rail Amp";
    b.Nx = "Applies +{weaponDamageShotgun}% shotgun damage for one mission.";
    b.Cy = "Sniper Rifle Rail Amp";
    b.Dy = "Applies +{weaponDamageSniper}% sniper rifle damage for one mission.";
    b.ez = "Strength Enhancer";
    b.fz = "Applies a level {ATTR_INT} melee damage boost to your character for one mission.";
    b.cA = "Targeting VI";
    b.dA = "Applies a level {ATTR_INT} targeting VI to your weapons for one round, increasing headshot damage.";
    b.Vi = "Adaptive War Amp";
    b.Wi = "Use an advanced biotic amp to increase the strength of damaging biotic powers.\nBiotic Power Damage +{bioticDamage}%";
    b.Hj = "Armored Compartments";
    b.Ij = "Stores additional thermal clips and missiles in armored compartments to shield them from incoming fire.\nCobra Missile Capacity: +{cobraCapacity}\nAmmo Capacity: +{ammoCapacity}%";
    b.$j = "Assault Loadout";
    b.ak = "Armor capacitors boose the kinetic coil in handheld weapons for greater firing power, and larger compartments allow for more thermal clips.\nThermal Clip Pack Capacity: +{thermalCapacity}\nWeapon Damage: +{weaponDamage}%";
    b.bk = "Assault Rifle Amp";
    b.ck = "Add power to assault rifles to increase round velocity and damage.\nAssault Rifle Damage: +{weaponDamageAssault}%";
    b.mk = "Barrage Upgrade";
    b.nk = "Boost the effectiveness of all weapons by increasing stability and thermal clip capacities.\nWeapon Stability +{stability}%\nThermal Clip Capacity +{ammoCapacity}%";
    b.yk = "Batarian Gauntlet";
    b.zk = "Batarian gauntlet that turns your heavy melee into a slow, heavy-hitting attack.\n\nHeavy melee damage: {meleeHeavyBase}";
    b.Gk = "Berserker Package";
    b.Hk = "Optimize shotgun and armor hydraulic power to increase shotgun and melee damage.\nShotgun Damage: +{weaponDamageShotgun}%\nMelee Damage: +{meleeDamage}%";
    b.am = "Combatives Upgrade";
    b.bm = "Increase the lethality of the assault rifle and pistol.\nAssault Rifle Dmage +{weaponDamageAssault}%\nPistol Damage +{weaponDamagePistol}%";
    b.cm = "Commando Package";
    b.dm = "Optimize pistol and biotic amp power to increase damage.\nPistol Damage: +{weaponDamagePistol}%\nBiotic Damage: +{bioticDamage}%";
    b.Ym = "Densified Ammunition";
    b.Zm = "Use an ammo shaver to load weapons with specially treated ammo blocks to fire heavier, harder ammunition that inflicts more damage per shot.\nWeapon Damage +{weaponDamage}%";
    b.Un = "Engineering Kit";
    b.Vn = "Install a variety of omni-tool upgrades to enhance the potency of tech attacks.\nTech Power Damage +{techDamage}%";
    b.eo = "Expert Package";
    b.fo = "Optimize energy supplies with multicore VIs to increase submachine gun damage and to recharge powers faster.\nSMG Damage: +{weaponDamageSMG}%\nPower Recharge Speed: +{globalRecharge}%";
    b.np = "Geth Scanner";
    b.op = "Highlight enemy activity nearby with geth scanner technology.\n\nScan range is {radius} meters.\nThis does not stack with other target-scanning effects.";
    b.sb = "Grenade Capacity";
    b.Bp = "Add extra grenade storage compartments to the user's armor.\nMax Grenades: +{grenadeCapacity}";
    b.Ep = "Guerrilla Upgrade";
    b.Fp = "Increase the lethality of the sniper rifle and SMG.\nSniper Rifle Damage +{weaponDamageSniper}%\nSMG Damage +{weaponDamageSMG}%";
    b.Cq = "Hydraulic Joints";
    b.Dq = "Improve armor joints to maximize the force and damage delivered through melee blows.\nMelee Damage: +{meleeDamage}%";
    b.Vq = "Juggernaut Shield";
    b.Wq = "Use high-capacity kinetic barrier generators to provide bonuses to both shield strength and melee damage.\nShield Strength +{shieldStrength}%\nMelee Damge +{meleeDamage}%";
    b.Cs = "Martial Biotic Amp";
    b.Ds = "Use an advanced biotic amp to increase the strength of biotic attacks, including melee damage.\nBiotic Damage +{bioticDamage}%\nMelee Damage +{meleeDamage}%";
    b.Es = "Medi-Gel Transmitter";
    b.Fs = "Short-range transmitters control medi-gel dispensers in teammates' armor, reviving self and nearby teammates simultaneously.\nRange: {radius} meters";
    b.Is = "Mental Focuser";
    b.Js = "Sharpen mental alertness and precision under stress to aid the performance of tech or biotic powers.\nPower Damage: +{globalPowerDamage}%";
    b.Rs = "Multicapacitor";
    b.Ss = "Add a backup power supply to the user's shields,  decreasing the time before they can be brought back online.\nShield Regen Speed: +{shieldRechargeRate}%";
    b.Ct = "Omni-Capacitors";
    b.Dt = "Provide more power to tech abilities to decrease recharge time.\nTech Damage +{techDamage}%\nPower Recharge Speed +{globalRecharge}%";
    b.Ft = "Operative Package";
    b.Gt = "Optimize sniper rifle and tech power damage.\nSniper Rifle Damage: +{weaponDamageSniper}%\nTech Damage: {techDamage}%";
    b.$t = "Pistol Amp";
    b.au = "Add power to pistols to increase round velocity and damage.\nPistol Damage: +{weaponDamagePistol}%";
    b.Lv = "Responder Loadout";
    b.Mv = "Optimizes shields for fast recovery and utilizes medi-gel dispensers more efficiently, increasing capacity.\nMedi-Gel Capacity: +{medigelCapacity}\nShield Regen Speed: +{shieldRechargeRate}%";
    b.Qv = "SMG Amp";
    b.Rv = "Add power to submachine guns to increase round velocity and damage.\nSMG Damage: +{weaponDamageSMG}%";
    b.bx = "Shield Booster";
    b.cx = "Amplify the power systems that generate shields to raise their effective strength.\nShields: +{shieldStrength}%";
    b.wx = "Shock Trooper Upgrade";
    b.xx = "Increase the lethality of the shotgun, and increase grenade storage.\nShotgun Damage +{weaponDamageShotgun}%\nMax Grenades +{grenadeCapacity}";
    b.Bx = "Shotgun Amp";
    b.Cx = "Add power to shotguns to increase round velocity and damage.\nShotgun Damage: +{weaponDamageShotgun}%";
    b.sy = "Sniper Rifle Amp";
    b.ty = "Add power to sniper rifles to increase round velocity and damage.\nSniper Rifle Damage: +{weaponDamageSniper}%";
    b.iz = "Stronghold Package";
    b.jz = "Optimize shield strength and the speed of shield restoration.\nShields: +{shieldStrength}%\nShield Regen Speed: +{shieldRechargeRate}%";
    b.kz = "Structural Ergonomics";
    b.lz = "Enhance the ability of armor to bear loads, speeding up cooldown so that powers can be used more often.\nPower Recharge Speed: +{globalRecharge}%";
    b.zz = "Survivor Loadout";
    b.Az = "Increases standard kinetic barriers as well as additional shield layers if available.\nOps Surival Pack Capacity: +{opsPackCapacity}\nShield Strength: +{shieldStrength}%";
    b.lA = "Thermal Clip Storage";
    b.mA = "Add compartments to the user's armor to increase the capacity for thermal clips without sacrificing armor integrity.\nThermal Clip Capacity +{ammoCapacity}%";
    b.pC = "Vulnerability VI";
    b.qC = "Use targeting VIs to pinpoint enemy weak points. Aim will be autocorrected to maximize damage.\nHeadshot Damage: +{headshot}%";
    b.sC = "Warfighter Package"; 
    b.tC = "Deploy this modification package to increase assault rifle power and grenade storage.\nAssault Rifle Damage: +{weaponDamageAssault}%\nMax Grenades: +{grenadeCapacity}"; 
    b.Fj = "Armor-Piercing Rounds"; 
    b.Gj = "Applies armor-piercing ammo for one mission.\nDamage: +{ammoDamage}%\nPenetration: {penetration} meters\nArmor-Piercing Rating: +{enemyArmorPenetration}%"; 
    b.rm = "Cryo Rounds"; 
    b.sm = "Applies cryo ammo for one mission.\nSpeed Reduction: {enemyMovementSpeed}%\nArmor Weakening: +{ammoArmorWeakening}%\nEffect Duration: {AMMO_TIME} seconds\nFreeze Chance Rating: {AMMO_INT}";
    b.ln = "Disruptor Rounds"; 
    b.mn = "Applies disruptor ammo for one mission.\nDamage: +{ammoDamage}%\nStun Chance Rating: {AMMO_INT}\nElectric Combo: {AMMO_TIME} seconds\nShield Regen Delay: +{ATTR_PCT}% for {ATTR_TIME} seconds"; 
    b.tn = "Drill Rounds"; 
    b.un = "Apply drill rounds for one mission, allowing ammunition to pass great distances through cover and other objects.\nDamage: +{ammoDamage}%\nPenetration: {penetration} meters\nArmor-Piercing Rating: +{enemyArmorPenetration}%"; 
    b.mo = "Explosive Rounds"; 
    b.no = "Apply explosive rounds for one mission. Rounds detonate after a short period rather than on impact.\nMax Explosion Damage: {AMMO_INT}\nExplosion Damage Per Shot: {ammoDamage}%\nExplosion Radius: {radius} meters";
    b.Fq = "Incendiary Rounds"; 
    b.Gq = "Applies incendiary ammo for one mission.\n\nDamage: +{ammoDamage}% over {ATTR_TIME} seconds\n\nSubject to a self-stacking glitch; damage can reach 3 times the presented value with continuous fire. Deals more damage with fire DoT from powers or melee."; 
    b.Wt = "Phasic Rounds"; 
    b.Xt = "Apply phasic rounds for one mission to break through enemy shields, increasing damage.\nDamage: +{ammoDamage}%\nShield Regen Delay: +{ATTR_PCT}% for {ATTR_TIME} seconds"; 
    b.AC = "Warp Rounds"; 
    b.BC = "Applies warp ammo for one mission.\nDamage: +{ammoDamage}%\nBiotic Damage Bonus: +{ATTR_PCT}%\nArmor Weakening: +{ammoArmorWeakening}% for {ATTR_TIME} seconds";
    b.bf3infiname = "Battlefield 3 Infiltrator";
    b.vibration_damper_desc = "Decrease weapon kickback and improve firing stability by upgrading autotargeting electronics.\nWeapon Stability +{stability}%";
    b.polonium_desc = "Apply polonium rounds for one mission to add a damage-over-time effect to enemies you shoot.\nDamage: +{ammoDamage}% over {ATTR_TIME} seconds";
    b.chakram_desc = "The fancifully named Chakram Launcher uses an internal fabricator to manufacture lightweight ammunition discs wrapped in holographic tracers. The discs explode on impact, sending shrapnel tearing through the enemy. Markings stamped on the gun's barrel are a shipping code created by its manufacturer, Ama-Lur Equipment. The code warns that the rifle must be assembled carefully, as it contains mixtures extremely volatile under pressure. This is why the Chakram Launcher requires thermal clips: without a way to dissipate the intense heat caused by its fabrication process, the rifle's circuitry would quickly destroy itself in a spectacularly lethal meltdown.";
    /*
     Copyright 2013
    
     @requires locale.en.js
    */
    var h = h || {};
    (function (d) {
        function c(c) { 
            var d = {}, g; 
            for (g in c) { 
                var e = g; 
                "arrowArmorWeakening" == g ? e = "enemyArmorWeakening" : 
                "arrowCount" == g ? e = "arrows" : 
                "arrowDamageTaken" == g && (e = "enemyDamageTaken"); 
                d[e] = d[e] ? d[e] + c[g] : c[g] 
            } 
            return d 
        
        } 
        function e(c) { var d = {}, g; for (g in c) { var e = g; "globalPowerDamage" == g && (e = "armorPowerDamage"); d[e] = d[e] ? d[e] + c[g] : c[g] } return d } 

        function P(c) { 
            var d = {}, g; 
            for (g in c) { 
                var e = g; 
                if (g == "rageMeleeDamage") 
                    e = "meleeDamage";
                if (g == "rageDR")
                    e = "damageReduction";
                if (g == "RMDR")
                    e = "damageReduction";
                d[e] = d[e] ? d[e] + c[g] : c[g] 
            } 
            return d 
        } 
        
        d.type = { none: 0, biotic: 1, tech: 2 }; 

        d.sc = { h: ["baseRechargeSpeed", "duration", "weaponDamage", "damageReduction"], g: !0, icon: "AdrenalineRush", 
        evolutions: [
            { name: a.sc, a: a.fj, attributes: { baseRechargeSpeed: 6, duration: 4, weaponDamage: .5, damageReduction: 0 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } }, 
            { name: a.Op, a: a.aj, attributes: { damageReduction: .4 } },
            { name: a.l, a: a.bj, attributes: { weaponDamage: .2 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .4 } }, 
            { name: a.P, a: a.cj, attributes: { meleeDamage: .5 } },
            { name: a.Eb, a: a.dj, attributes: { shieldStrength: 1 } },
            { name: a.Hu, a: a.ej, attributes: { ATTR_INT: 1 } }]
        };

        d.bd = { Z: { damage: a.cg }, h: ["baseRechargeSpeed", "dot", "duration", "radius", "damage"], g: !0, icon: "AnnihilationSphere", 
        evolutions: [
            { name: a.bd, a: a.tj, attributes: { baseRechargeSpeed: 8, dot: 100, duration: 45, radius: 4, damage: 500 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.ec, a: a.ma, attributes: { radiusPct: .3 } }, 
            { name: a.qe, a: a.qj, attributes: { enemyDamageTaken: .15 } },
            { name: a.jc, a: a.rj, attributes: { movementSpeed: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .65 } }, 
            { name: a.wg, a: a.sj, attributes: { powerDuration: 1, ATTR_PCT: 1 } }], 
            i: { health: 1, armor: 1.5, barrier: 1.5, shield: 1 }, type: d.type.biotic, is_biotic_primer: true
        }; 

        d.uj = { h: ["damage", "radius"], g: !1, icon: "EMPGrenade", M: !0, 
        evolutions: [
            { name: a.Lf, a: a.Nf, attributes: { damage: 400, radius: 6 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } }, 
            { name: a.ye, a: a.Mf, attributes: { powerDOT: .4, ATTR_TIME: 10 } },
            { name: a.cd, a: a.Ic, attributes: { powerDamageArmor: .75 } }, 
            { name: a.pf, a: a.qd, attributes: { powerDamageBarrier: .75, powerDamageShield: .75 } }], 
            i: { health: 1, armor: 1, barrier: 2, shield: 2 }, 
            is_grenade_power: !0, type: d.type.tech
        }; 

        d.Of = { h: ["damage", "radius"], g: !1, icon: "EMPGrenade", M: !0, 
        evolutions: [
            { name: a.Lf, a: a.Nf, attributes: { damage: 400, radius: 8 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } }, 
            { name: a.ye, a: a.Mf, attributes: { powerDOT: .4, ATTR_TIME: 10 } },
            { name: a.cd, a: a.Ic, attributes: { powerDamageArmor: .75 } }, 
            { name: a.pf, a: a.qd, attributes: { powerDamageBarrier: .75, powerDamageShield: .75 } }], 
            i: { health: 1, armor: 1, barrier: 2, shield: 2 }, is_grenade_power: !0, type: d.type.tech
        }; 

        d.ae = { h: ["bonusGrenade", "bow", "arrowCount"], g: !0, icon: "BowModalTwo", M: !0, 
        evolutions: [
            { name: a.ae, a: a.Ej, attributes: { bonusGrenade: 1, bow: 75, arrowCount: 5, ATTR_INT: 3 } },
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 1, grenadeCapacity: 1 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 1, grenadeCapacity: 1 } }, 
            { name: a.Yx, a: a.Cj, attributes: { powerDOT: .5, ATTR_TIME: 5 } },
            { name: a.Sa, a: a.Dj, attributes: { powerDamageArmor: .35, arrowArmorWeakening: .5, ATTR_TIME: 8 } }, 
            { name: a.Pf, a: a.Sg, attributes: { arrowCount: 1 } },
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 2, grenadeCapacity: 2 } }], 
            i: { health: 1, armor: 1.5, barrier: 1, shield: 1 }, 
            pb: c, is_grenade_power: !0, mutually_exclusive: [1, 2]
        }; 

        d.fe = { h: ["baseRechargeSpeed", "damage", "duration", "radius"], g: !1, icon: "BatarianAttack", 
        evolutions: [
            { name: a.fe, a: a.lk, attributes: { baseRechargeSpeed: 8, damage: 900, duration: 10, radius: 12 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },  { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.lm, a: a.hk, attributes: { ATTR_INT: 20 } }, 
            { name: a.Range, a: a.ik, attributes: { rangePct: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.xm, a: a.jk, attributes: { powerDamage: .5, powerDuration: .5 } }, 
            { name: a.ko, a: a.kk, attributes: { ATTR_TIME: 3, bladeDamage: 400 } }]
        }; 
        
        d.rb = { Z: { armor: a.cg, radius: a.ml }, h: ["baseRechargeSpeed", "damageReduction", "armor", "radius"], g: !0, icon: "Barrier", 
            evolutions: [
            { name: a.rb, a: a.rk, attributes: { baseRechargeSpeed: 6, damageReduction: .25, armor: 500, radius: 3, globalRecharge: -.5} },
            { name: a.uv, a: a.ok, attributes: { rechargeSpeed: .25, powerDamage: .3, powerForce: .3, radiusPct: .3 } },
            { name: a.dg, a: a.Sf, attributes: { powerDamage: .2, powerForce: .2, radiusPct: .2 } }, 
            { name: a.dg, a: a.Sf, attributes: { powerDamage: .3, powerForce: .3, radiusPct: .3 } },
            { name: a.Uf, a: a.rg, attributes: { damageReduction: .05 } },
            { name: a.Ha, a: a.pk, attributes: { shieldRechargeRate: .15 } }, 
            { name: a.Lc, a: a.qk, attributes: { globalPowerDamage: .3, globalPowerForce: .3 } },
            { name: a.kc, a: a.Ld, attributes: { globalRecharge: .3 } },
            { name: a.Uf, a: a.fc, attributes: { damageReduction: .1 } }], 
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, 
            pb: e, type: d.type.biotic
        }; 
        
        d.lb = { Z: { barrierRestored: a.Tf }, h: ["baseRechargeSpeed", "damage", "force", "barrierRestored", "damageReduction"], g: !0, icon: "BioticCharge", 
            evolutions: [
            { name: a.lb, a: a.Zf, attributes: { barrierRestored: .5, damage: 400, force: 650, baseRechargeSpeed: 10, damageReduction: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.Y, a: a.$f, attributes: { areaTargetBonus: 2, radius: 2 } },
            { name: a.Gf, a: a.Wf, attributes: { weaponDamage: .25, ATTR_TIME: 5 } }, 
            { name: a.Lc, a: a.Ik, attributes: { globalPowerDamage: .4, globalPowerForce: .4, ATTR_TIME: 10 } },
            { name: a.Kb, a: a.Xf, attributes: { ATTR_PCT: .5 } },
            { name: a.rb, a: a.Yf, attributes: { barrierRestored: .5 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.Kk = { Z: { barrierRestored: a.Tf }, h: ["baseRechargeSpeed", "damage", "force", "barrierRestored", "damageReduction"], g: !0, icon: "KroganBioticCharge", 
            evolutions: [
            { name: a.lb, a: a.Zf, attributes: { barrierRestored: .5, baseRechargeSpeed: 14, damage: 500, force: 750, damageReduction: .5  } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.Y, a: a.$f, attributes: { areaTargetBonus: 2, radius: 2 } },
            { name: a.Gf, a: a.Wf, attributes: { weaponDamage: .25, ATTR_TIME: 5 }  }, 
            { name: a.wb, a: a.Jk, attributes: { meleeDamage: .4, ATTR_TIME: 5 } },
            { name: a.Kb, a: a.Xf, attributes: { ATTR_PCT: .5 } },
            { name: a.rb, a: a.Yf, attributes: { barrierRestored: .5 } }], 
                i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.he = { h: ["baseRechargeSpeed", "duration", "damageReduction", "meleeDamage", "movementSpeed"], g: !0, icon: "BioticFocus", 
        evolutions: [
            { name: a.he, a: a.Nk, attributes: { baseRechargeSpeed: 10, damageReduction: .15, duration: 12, meleeDamage: .15, movementSpeed: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } }, 
            { name: a.qe, a: a.rg, attributes: { damageReduction: .1 } },
            { name: a.jc, a: a.Zg, attributes: { movementSpeed: .075 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .4 } }, 
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.Yk, a: a.Lk, attributes: { barrierRestored: .4, ATTR_TIME: .5 } },
            { name: a.$p, a: a.Mk, attributes: { damageReduction: .2, meleeDamage: .3, movementSpeed: .075 } }]
        }; 
        
        d.ie = { h: ["baseRechargeSpeed", "hammer", "force", "hammerCharges"], g: !1, icon: "BioticHammerModal", 
            evolutions: [
            { name: a.ie, a: a.Tk, attributes: { baseRechargeSpeed: 18, hammer: 750, force: 500, hammerCharges: 1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .2, powerForce: .2 } }, 
            { name: a.ga, a: a.Ok, attributes: { powerDamage: .3, powerForce: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.ag, a: a.Pk, attributes: { comboDamage: .5, comboForce: .5 } }, 
            { name: a.Sa, a: a.Qk, attributes: { ATTR_PCT: .5, powerDamageArmor: .75 } },
            { name: a.Fu, a: a.Rk, attributes: { powerForce: 1 } },
            { name: a.Cd, a: a.Sk, attributes: { hammerCharges: 1 } }], 
            i: { health: 1, armor: 1.5, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.ed = { Z: { orbRecharge: a.wv }, h: ["baseRechargeSpeed", "damage", "radius", "orbRecharge"], g: !0, icon: "BioticOrbs", 
            evolutions: [
            { name: a.ed, a: a.Xk, attributes: { baseRechargeSpeed: 24, damage: 250, radius: 1.5, bioticOrbs: 3, orbRecharge: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.ec, a: a.ma, attributes: { radiusPct: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } }, 
            { name: a.k, a: a.Uk, attributes: { orbRecharge: .05 } },
            { name: a.Ae, a: a.Vk, attributes: { ATTR_PCT: .15, enemyDamageTaken: .45, ATTR_TIME: 6, ATTR_INT: 3 } },
            { name: a.Ht, a: a.Wk, attributes: { bioticOrbs: 1 } }],
            i: { health: 1, armor: 1.5, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.je = { h: ["baseRechargeSpeed", "damage", "range", "radius"], g: !1, icon: "SonicSlash", 
        evolutions: [
            { name: a.je, a: a.Zk, attributes: { baseRechargeSpeed: 8, damage: 550, range: 20, radius: 2 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.zb, a: a.rd, attributes: { comboDamage: .5, comboForce: .5 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.Range, a: a.gc, attributes: { rangePct: .5 } }],
            i: { health: 1, armor: 1.5, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.ke = { h: ["baseRechargeSpeed", "duration", "radius", "damageReduction", "enemyDamageTaken"], g: !0, icon: "BubbleShield", 
        evolutions: [
            { name: a.ke, a: a.fl, attributes: { baseRechargeSpeed: 6, duration: 30, radius: 3, damageReduction: .2, enemyDamageTaken: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.W, a: a.Ca, attributes: { powerDuration: .3 } },  { name: a.qx, a: a.$k, attributes: { shieldRechargeRate: .15 } },
            { name: a.Y, a: a.al, attributes: { radiusPct: .3 } }, 
            { name: a.xc, a: a.bl, attributes: { damageReduction: .1 } },
            { name: a.Qn, a: a.cl, attributes: { enemyDamageTaken: .15 } },
            { name: a.lj, a: a.dl, attributes: { damageReduction: .1, shieldRechargeRate: .1 } }, 
            { name: a.zC, a: a.el, attributes: { ATTR_DMG: 50, enemyArmorWeakening: .25, ATTR_INT: 3 } }], 
            type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.tc = { Z: { meleeReflect: a.Hs }, h: ["baseRechargeSpeed", "damageReduction", "meleeDamage", "meleeReflect"], g: !0, icon: "BatarianArmor", 
            evolutions: [
            { name: a.tc, a: a.kl, attributes: { baseRechargeSpeed: 3, damageReduction: .25, meleeDamage: .15, meleeReflect: 0.16, globalRecharge: -.5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.P, a: a.da, attributes: { meleeDamage: .1 } },
            { name: a.S, a: a.fc, attributes: { damageReduction: .05 } }, 
            { name: a.P, a: a.da, attributes: { meleeDamage: .15 } },
            { name: a.k, a: a.$g, attributes: { shieldRechargeRate: .15 } }, 
            { name: a.Dm, a: a.il, attributes: { meleeReflect: .24 } },
            { name: a.kc, a: a.Ld, attributes: { globalRecharge: .3 } }, 
            { name: a.S, a: a.jl, attributes: { damageReduction: .1 } }]
        }; 
        
        d.uc = { Z: { bloodlustMovementSpeed: a.jc, bloodlustMeleeDamage: a.P }, h: ["baseRechargeSpeed", "duration", "bloodlustMovementSpeed", "bloodlustHOT", "bloodlustMeleeDamage"], g: !0, icon: "Bloodlust", 
            evolutions: [
            { name: a.uc, a: a.xl, attributes: { baseRechargeSpeed: 4, duration: 15, bloodlustMovementSpeed: .05, bloodlustHOT: 50, bloodlustMeleeDamage: .1, globalRecharge: -.6 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.pd, a: a.ql, attributes: { bloodlustHealthRegen: .3 } },
            { name: a.P, a: a.rl, attributes: { bloodlustMeleeDamage: .1 } }, 
            { name: a.pd, a: a.sl, attributes: { bloodlustHealthRegen: .5 } },
            { name: a.J, a: a.tl, attributes: { bloodlustPowerDamage: .05 } },
            { name: a.n, a: a.ul, attributes: { bloodlustWeaponDamage: .05 } }, 
            { name: a.Ms, a: a.vl, attributes: { bloodlustMeleeDamage: .1, bloodlustMovementSpeed: .05 } },
            { name: a.pd, a: a.wl, attributes: { bloodlustHealthRegen: 1 } }], 
                pb: function (c) {
                    var d = {}, g; 
                    for (g in c) { 
                        var e = g, fa = 3 * c[g]; 
                        switch (g) { 
                            case "bloodlustMeleeDamage": 
                                e = "meleeDamage"; 
                                break; 
                            case "bloodlustMovementSpeed": 
                                e = "movementSpeed"; 
                                break; 
                            case "bloodlustPowerDamage": 
                                e = "globalPowerDamage"; 
                                break; 
                            case "bloodlustWeaponDamage":
                                e = "weaponDamage"; 
                                break; 
                            default: fa = c[g] 
                        }
                        d[e] = fa 
                    } 
                    return d
                }
        }; 
        
        d.le = { h: ["damage", "radius"], g: !1, icon: "CainMine", M: !0, 
        evolutions: [
            { name: a.le, a: a.Dl, attributes: { damage: 1200, radius: 5, ATTR_TIME: 1.5, ATTR_INT: 3 } },
            { name: a.sb, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.fg, attributes: { radiusPct: .3 } },
            { name: a.Sa, a: a.Cl, attributes: { powerDamageArmor: .5 } }, 
            { name: a.sb, a: a.ka, attributes: { grenadeCapacity: 2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.Y, a: a.fg, attributes: { radiusPct: .5 } }],
            i: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, is_grenade_power: !0
        }; 
        
        d.Xb = { h: ["baseRechargeSpeed", "damage", "radius"], g: !1, icon: "Carnage", 
        evolutions: [
            { name: a.Xb, a: a.Fl, attributes: { baseRechargeSpeed: 10, damage: 350, radius: 1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .5 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Rg, a: a.El, attributes: {} }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Sa, a: a.Vg, attributes: { powerDamageArmor: .65 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } }],
            i: { health: 1, armor: 1.5, barrier: .5, shield: .5 }
        }; 
        
        d.Yb = { h: ["damage", "force", "radius"], g: !1, icon: "BioticGrenade", M: !0, 
        evolutions: [
            { name: a.Yb, a: a.Ol, attributes: { damage: 500, force: 1E3, radius: 4 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .2, powerForce: .2 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .35 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } }, 
            { name: a.Bm, a: a.Ml, attributes: { ATTR_PCT: 1 } },
            { name: a.Xx, a: a.Nl, attributes: { ATTR_INT: 1 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .5, powerForce: .5 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, is_grenade_power: !0, type: d.type.biotic
        }; 
        
        d.vc = { Z: { damage: a.vn, petShield: a.wn }, h: ["baseRechargeSpeed", "damage", "petShield"], g: !1, icon: "CombatDrone", 
            evolutions: [
            { name: a.vc, a: a.$l, attributes: { baseRechargeSpeed: 5, damage: 40, petShield: 500 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.Ub, a: a.Me, attributes: { powerDamage: .3, petShieldStrength: .3 } },
            { name: a.Ub, a: a.Me, attributes: { powerDamage: .4, petShieldStrength: .4 } }, 
            { name: a.zb, a: a.Wl, attributes: { ATTR_DMG: 400, radius: 5 } },
            { name: a.Oc, a: a.Xl, attributes: { ATTR_DMG: 100, radius: 5 } },
            { name: a.Ub, a: a.Me, attributes: { powerDamage: .5, petShieldStrength: .5 } },
            { name: a.Nh, a: a.Yl, attributes: { ATTR_DMG: 300, radius: 2.5 } },
            { name: a.Il, a: a.Zl, attributes: { areaTargetBonus: 3 } }], 
                type: d.type.tech
        }; 
        
        d.me = { h: ["bonusGrenade", "bow", "force", "arrowCount"], g: !0, icon: "BowModalOne", M: !0, 
        evolutions: [
            { name: a.me, a: a.gm, attributes: { bonusGrenade: 1, bow: 25, force: 450, arrowCount: 5, ATTR_INT: 3 } },
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 1, grenadeCapacity: 1 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .2, powerForce: .2 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } }, 
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 1, grenadeCapacity: 1 } },
            { name: a.Oc, a: a.em, attributes: { powerDOT: 1, ATTR_TIME: 5 } }, 
            { name: a.ig, a: a.fm, attributes: { enemyMovementSpeed: -.1, ATTR_PCT: .05, arrowDamageTaken: .15, ATTR_TIME: 8, ATTR_INT: 3 } },
            { name: a.Pf, a: a.Sg, attributes: { arrowCount: 1 } }, 
            { name: a.sb, a: a.ka, attributes: { bonusGrenade: 2, grenadeCapacity: 2 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, pb: c, is_grenade_power: !0, mutually_exclusive: [1, 2]
        }; 
        
        d.wc = { h: ["baseRechargeSpeed", "damage", "force"], g: !1, icon: "ConcussiveShot", 
        evolutions: [
            { name: a.wc, a: a.km, attributes: { baseRechargeSpeed: 5, damage: 200, force: 300 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .2, powerForce: .2 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } }, 
            { name: a.Y, a: a.Pb, attributes: { radius: 1.5 } },
            { name: a.Vw, a: a.hm, attributes: { ATTR_PCT: 1, freezeDamage: 1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.Ip, a: a.im, attributes: { powerDamage: .5, radius: 1 } },
            { name: a.Zx, a: a.jm, attributes: { powerDOT: 2, ATTR_INT: 10, powerForce: .5 } }],
            i: { health: 1, armor: 1, barrier: 4, shield: 1 }
        }; 
        
        d.Zb = { Z: { duration: a.Fg }, h: ["baseRechargeSpeed", "duration", "enemyMovementSpeed"], g: !0, icon: "CryoBlast", 
                evolutions: [
                { name: a.Zb, a: a.qm, attributes: { baseRechargeSpeed: 5, duration: 4, enemyArmorWeakening: .25, enemyMovementSpeed: -.15 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
                { name: a.W, a: a.Ka, attributes: { powerDuration: .4 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .6 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 2 } }, 
                { name: a.Oy, a: a.om, attributes: { enemyMovementSpeed: -.3 } },
            { name: a.lg, a: a.Wg, attributes: { enemyDamageTaken: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: 1 } },
                { name: a.To, a: a.pm, attributes: { enemyDamageTaken: .15, enemyArmorWeakening: .25 } }], 
                    type: d.type.tech, cryo: true
        }; 
        
        d.yc = { h: ["baseRechargeSpeed", "dot", "duration"], g: !0, icon: "DarkChannel", 
        evolutions: [
            { name: a.yc, a: a.Im, attributes: { baseRechargeSpeed: 8, dot: 75, duration: 30 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .4 } },
            { name: a.sf, a: a.Gm, attributes: { enemyMovementSpeed: -.3 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.Xe, a: a.Hm, attributes: { powerDamageArmor: .75, powerDamageBarrier: .75 } }],
            i: { health: 1, armor: 1.5, barrier: 2, shield: .5 }, type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.re = { Z: { baseRechargeSpeed: a.bn, damage: a.an, duration: a.Cm, radius: a.tg }, h: ["baseRechargeSpeed", "damage", "radius", "dsDOT", "duration"], g: !0, icon: "DarkSingularity", 
            evolutions: [
            { name: a.re, a: a.Qm, attributes: { baseRechargeSpeed: 24, damage: 1E3, radius: 5, dsDOT: 250, duration: 5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .15 } }, 
            { name: a.l, a: a.Km, attributes: { poweDamage: .2,
                    dotDamage: .15
                } },
            { name: a.l, a: a.Lm, attributes: { powerDamage: .3, dotDamage: .2 } },
            { name: a.tg, a: a.Mm, attributes: { radiusPct: .4 } },
            { name: a.og, a: a.Nm, attributes: { dotDamage: .4, powerDuration: .4 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Jm, a: a.Om, attributes: { powerDamage: 1, radiusPct: -.5 } }, 
            { name: a.TB, a: a.Pm, attributes: { radiusPct: .4, dotDamage: .4, powerDuration: .4 } }], 
                type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.jd = { h: ["baseRechargeSpeed", "duration", "decoyShield"], g: !1, icon: "Decoy", 
        evolutions: [
            { name: a.jd, a: a.Wm, attributes: { baseRechargeSpeed: 8, duration: 15, decoyShield: 1E3 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } }, 
            { name: a.W, a: a.Ka, attributes: { powerDuration: .4 } },
            { name: a.S, a: a.Sm, attributes: { decoyShieldStrength: .4 } },
            { name: a.Oc, a: a.Tm, attributes: { ATTR_DMG: 100, radius: 2.5 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.io, a: a.Um, attributes: { ATTR_DMG: 300, radius: 4 } },
            { name: a.ux, a: a.Vm, attributes: { decoyShieldStrength: .5, powerDuration: .5 } }]
        }; 
        
        d.ue = { Z: { magazineSize: a.Se }, h: ["baseRechargeSpeed",
                "weaponDamage", "weaponROF", "magazineSize"], g: !0, icon: "DevestatorMode", 
                evolutions: [
                { name: a.ue, a: a.hn, attributes: { baseRechargeSpeed: 3, weaponDamage: .1, weaponROF: .1, magazineSize: .15, movementSpeed: -.1 } },
            { name: a.Se, a: a.vg, attributes: { magazineSize: .05 } }, 
                { name: a.pe, a: a.ug, attributes: { weaponDamage: .05 } },
            { name: a.px, a: a.cn, attributes: { shieldRechargeRate: .15 } },
            { name: a.qi, a: a.dn, attributes: { accuracy: .25 } }, 
                { name: a.Se, a: a.vg, attributes: { magazineSize: .15 } },
            { name: a.hf, a: a.en, attributes: { weaponROF: .15 } },
            { name: a.zd, a: a.gn, attributes: { shieldStrength: .4 } },
                { name: a.pe, a: a.ug, attributes: { weaponDamage: .15 } }]
        }; 
        
        d.ze = { Z: { radius: a.ec }, h: ["baseRechargeSpeed", "hammer", "radius", "hammerCharges"], g: !0, icon: "TechHammerModal", 
            evolutions: [
            { name: a.ze, a: a.Ln, attributes: { baseRechargeSpeed: 18, hammer: 250, radius: 4, hammerCharges: 2 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.Y, a: a.Fn, attributes: { radiusPct: .2 } },
            { name: a.tx, a: a.Gn, attributes: { powerDamageBarrier: .75, powerDamageShield: .75 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .4 } }, 
            { name: a.zg, a: a.Hn, attributes: { ATTR_DMG: 250, ATTR_TIME: 5, fireDoT: true } },
            { name: a.ig, a: a.In, attributes: { enemyMovementSpeed: -.3, enemyDamageTaken: .2, ATTR_TIME: 5 } }, 
            { name: a.mv, a: a.Jn, attributes: { radiusPct: .3, techCombo: .65 } },
            { name: a.Cd, a: a.Kn, attributes: { hammerCharges: 2 } }],
            i: { health: 1, armor: 1, barrier: 3, shield: 3 }, type: d.type.tech
        }; 
        
        d.xe = { h: ["baseRechargeSpeed", "damage", "range", "radius"], g: !1, icon: "ElectricSlash", 
        evolutions: [
            { name: a.xe, a: a.En, attributes: { baseRechargeSpeed: 8, damage: 550, range: 20, radius: 2 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.zb, a: a.Xz, attributes: { ATTR_PCT: 1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.Range, a: a.gc, attributes: { rangePct: .5 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1.5 }, type: d.type.tech
        }; 
        
        d.Ac = { Z: { shieldRestored: a.sx }, h: ["baseRechargeSpeed", "damage", "radius", "shieldRestored", "damageReduction"], g: !0, icon: "EnergyDrain", 
            evolutions: [
            { name: a.Ac, a: a.Tn, attributes: { baseRechargeSpeed: 8, damage: 220,
                    radius: 1.5, shieldRestored: .5, damageReduction: 0
                } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: 1 } },
            { name: a.wg, a: a.Rn, attributes: { shieldRestored: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.Aj, a: a.Sn, attributes: { damageReduction: .4, ATTR_TIME: 10 } }],
            i: { health: 1, armor: .5, barrier: 3, shield: 3 }, type: d.type.tech
        }; 
        
        d.Bo = { Z: { ascensionDamage: a.Tj, ascensionRecharge: a.Qf, ascensionDR: a.Wj }, 
            h: ["durability", "meleeDamage", "ascensionDamage", "ascensionRecharge", "ascensionDR"], g: !0, icon: "MPMeleePassive", M: !0, 
            evolutions: [
            { name: a.oj, a: a.pj, attributes: { durability: .15, meleeDamage: .15, ascensionDamage: .1, ascensionRecharge: .05, ascensionDR: -.15, ascensionDuration: 45 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.Uj, a: a.Vj, attributes: { ascensionDamage: .05 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.Qf, a: a.Zj, attributes: { ascensionRecharge: .1 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.Xj, a: a.Yj, attributes: { ascensionDamage: .1, ascensionRecharge: .1, ascensionDR: -.1 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }], 
            pb: function (c) { 
                var d = {}, g; 
                for (g in c) { 
                    var e = g; 
                    "ascensionDamage" == g ? 
                        e = "globalDamage" : 
                        "ascensionDR" == g ? 
                            e = "damageReduction" : 
                            "ascensionRecharge" == g && (e = "globalRecharge"); 
                    d[e] = d[e] ? d[e] + c[g] : c[g] 
                } 
                return d 
            }
        }; 
        
        d.Be = { h: ["durability", "meleeDamage", "movementSpeed"], g: !1, icon: "MPMeleePassive",
            M: !0, 
            evolutions: [
            { name: a.$b, a: a.to, attributes: { durability: .2, meleeDamage: .15, movementSpeed: .1 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .2 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.so, attributes: {
                    durability: .25,
                    movementSpeed: .1
                }
            }]
        }; 
        
        d.Ce = { h: ["durability", "meleeDamage", "shieldRechargeRate"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.gj, a: a.hj, attributes: { durability: .15, meleeDamage: .15, shieldRechargeRate: .1 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.Lc, a: a.Ag, attributes: { meleeDamage: .3, globalPowerDamage: .3, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.Do = { h: ["durability", "meleeDamage", "meleeDrain"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.Jp, a: a.Np, attributes: { durability: .2, meleeDamage: .15, meleeDrain: 500 } },
            { name: a.S, a: a.Og, attributes: { durability: .15, meleeRestore: .15 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.Og, attributes: { durability: .2, meleeRestore: .2 } },
            { name: a.Ny, a: a.Kp, attributes: { movementSpeed: .15, ATTR_TIME: 10 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.Qy, a: a.Lp, attributes: { alliedWeaponDamage: .1, meleeDamage: .3, radius: 4 } },
            { name: a.Gu, a: a.Mp, attributes: { durability: .75, globalDamage: -.15, meleeRestore: .5 } }]
        }; 
        
        d.Za = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.$b, a: a.Mb, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.Co = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.uo, a: a.Mb, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .1 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .1, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .2 } }]
        }; 
        
        d.kd = { h: ["durability", "meleeDamage", "rageDR", "rageMeleeDamage"], g: !0, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.ov, a: a.xo, attributes: { durability: .2, meleeDamage: .2, rageDR: .2, rageDuration: 30, rageMeleeDamage: .5, ATTR_INT: 3, ATTR_TIME: 30 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } }, 
            { name: a.P, a: a.da, attributes: { meleeDamage: .25 } },
            { name: a.P, a: a.Bg, attributes: { meleeDamage: .3, rageMeleeDamage: .3 } },
            { name: a.S, a: a.vo, attributes: { durability: .2, rageDR: .05 } }, 
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } }, 
            { name: a.xh, a: a.Cg, attributes: { meleeDamage: .3, ATTR_INT: 2, ATTR_TIME: 30 } },
            { name: a.Ta, a: a.wo, attributes: { durability: .3, rageDR: .05 }
            }], 
            pb: P
        }; 
        
        d.Eo = { h: ["durability", "meleeDamage", "rageDR", "rageMeleeDamage", "rageHOT"], g: !0, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.uC, a: a.Ao, attributes: { durability: .1, meleeDamage: .2, rageDR: .2, rageDuration: 45, rageHOT: 100, rageMeleeDamage: .5, ATTR_INT: 2, ATTR_TIME: 45 } }, 
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .25 } },
            { name: a.P, a: a.Bg, attributes: { meleeDamage: .3, rageMeleeDamage: .3 } }, 
            { name: a.S, a: a.yo, attributes: { durability: .2, rageDR: .05, rageHealthRegen: .4 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } }, 
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.xh, a: a.Cg, attributes: { meleeDamage: .3, ATTR_INT: 1, ATTR_TIME: 45 } }, 
            { name: a.Ta, a: a.zo, attributes: { durability: .3, rageDR: .05, rageHealthRegen: .6 } }], 
            pb: P
        }; 
        
        d.ac = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.$b, a: a.Mb, attributes: { durability: .25, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .2 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .3 } }]
        }; 
        
        d.Fo = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.Lz, a: a.Mz, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.Go = { h: ["durability", "meleeDamage", "omniShield"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.gx, a: a.Mb, attributes: {
                    durability: .15,
                    meleeDamage: .15, omniShield: 3E3
                } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.ex, a: a.hx, attributes: { omniShieldHealth: .5 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.qo, a: a.ix, attributes: { omniShieldFire: .5, ATTR_TIME: 5 } },
            { name: a.tm, a: a.jx, attributes: { enemyMovementSpeed: -.3, enemyArmorWeakening: .5, ATTR_TIME: 5 } }]
        }; 
        
        d.Ho = { h: ["durability", "meleeDamage", "movementSpeed"], g: !1, icon: "MPMeleePassive", M: !0, 
            evolutions: [
            { name: a.Dz, a: a.Iz, attributes: { durability: .2, meleeDamage: .15, movementSpeed: .1 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.Yh, a: a.Zh, attributes: { meleeDamage: .2 } },
            { name: a.Yh, a: a.Zh, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .2 } },
            { name: a.$a, a: a.Ez, attributes: { meleeDamage: .5, ATTR_TIME: 20 } },
            { name: a.ox, a: a.Fz, attributes: { shieldRechargeRate: .1, movementSpeed: .1 } },
            { name: a.Nd, a: a.Gz, attributes: { meleeDamageShield: .5, meleeDamageBarrier: .5 } },
            { name: a.Sa, a: a.Hz, attributes: { meleeDamageArmor: .5 } }]
        }; 
        
        d.Ga = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.$b, a: a.Mb, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.Lc, a: a.Ag, attributes: { meleeDamage: .3, globalPowerDamage: .3, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.bc = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.$b, a: a.Mb, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .2 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .3, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.Io = { Z: { meleeDamage: a.Dd }, h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
            evolutions: [
            { name: a.zt, a: a.Bt, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.Dd, a: a.Ve, attributes: { meleeDamage: .25 } },
            { name: a.Dd, a: a.Ve, attributes: { meleeDamage: .35 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.Xq, a: a.At, attributes: { meleeDamage: .25, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.Dd, a: a.Ve, attributes: { meleeDamage: .5 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.De = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.$b, a: a.Mb, attributes: { durability: .15, meleeDamage: .15 } },
            { name: a.S, a: a.T, attributes: { durability: .1 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .3, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .25 } }]
        }; 
        
        d.Jo = { h: ["durability", "meleeDamage"], g: !1, icon: "MPMeleePassive", M: !0, 
        evolutions: [
            { name: a.YB, a: a.ZB, attributes: { durability: .25, meleeDamage: .15, ATTR_PCT: .3, ATTR_TIME: 5 } },
            { name: a.S, a: a.T, attributes: { durability: .15 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .2 } },
            { name: a.P, a: a.da, attributes: { meleeDamage: .3 } },
            { name: a.S, a: a.T, attributes: { durability: .2 } },
            { name: a.$a, a: a.cb, attributes: { meleeDamage: .75, ATTR_TIME: 30 } },
            { name: a.Ha, a: a.Ma, attributes: { shieldRechargeRate: .15 } },
            { name: a.wb, a: a.Bb, attributes: { meleeDamage: .3, weaponDamage: .25, ATTR_TIME: 20 } },
            { name: a.Ta, a: a.T, attributes: { durability: .3 } }]
        }; 
        
        d.Bc = { h: ["baseRechargeSpeed", "dot", "duration", "range"], g: !0, icon: "Flamer", 
        evolutions: [
            { name: a.Bc, a: a.Ko, attributes: { baseRechargeSpeed: 8, dot: 200, duration: 5, range: 10, fireDoT: true } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.jf, a: a.gc, attributes: { rangePct: .5 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .6 } },
            { name: a.Sa, a: a.Ic, attributes: { powerDamageArmor: .5 } }, 
            { name: a.Nd, a: a.qd, attributes: { powerDamageBarrier: .5, powerDamageShield: .5 } }],
            i: { health: 1, armor: 1.5, barrier: 1, shield: 1 }, type: d.type.tech
        }; 
        
        d.ld = { Z: { duration: a.Gs }, h: ["baseRechargeSpeed", "damageReduction", "meleeDamage", "duration"],
            g: !0, icon: "Fortification", 
            evolutions: [
            { name: a.ld, a: a.No, attributes: { baseRechargeSpeed: 5, damageReduction: .25, meleeDamage: .5, duration: 20, globalRecharge: -.5 } },
            { name: a.k, a: a.Lo, attributes: { rechargeSpeed: .25 } }, 
            { name: a.P, a: a.Eg, attributes: { meleeDamage: .2 } },
            { name: a.S, a: a.fc, attributes: { damageReduction: .05 } },
            { name: a.P, a: a.Eg, attributes: { meleeDamage: .3 } }, 
            { name: a.k, a: a.$g, attributes: { shieldRechargeRate: .15 } },
            { name: a.Lc, a: a.Mo, attributes: { globalPowerDamage: .3, globalPowerForce: .3 } },
            { name: a.kc, a: a.Ld, attributes: { globalRecharge: .3 } },
            { name: a.S, a: a.fc, attributes: { damageReduction: .1 } }]
        }; 
        
        d.Cc = { h: ["damage", "radius"], g: !1, icon: "FragGrenade", M: !0, 
        evolutions: [
            { name: a.Cc, a: a.Ro, attributes: { damage: 900, radius: 6.5 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } }, 
            { name: a.nl, a: a.Oo, attributes: { powerDOT: .5, ATTR_TIME: 5 } },
            { name: a.cd, a: a.Po, attributes: { ATTR_PCT: .75, powerDamageArmor: .5 } },
            { name: a.pf, a: a.Qo, attributes: { ATTR_PCT: .75, powerDamageShield: .5 } }], is_grenade_power: !0
        }; 
        
        d.od = { Z: { damage: a.ci, petShield: a.ei }, h: ["baseRechargeSpeed", "damage", "petShield", "turretRestore"], g: !1, icon: "GethTurret", 
            evolutions: [
            { name: a.od, a: a.wp, attributes: { baseRechargeSpeed: 5, damage: 150, petShield: 1E3, turretRestore: 350, ATTR_INT: 8, ATTR_TIME: 8 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.Ub, a: a.sd, attributes: { powerDamage: .3, petShieldStrength: .3 } },
            { name: a.Ub, a: a.sd, attributes: { powerDamage: .4, petShieldStrength: .4 } }, 
            { name: a.rx, a: a.sp, attributes: { turretRestorePct: .5 } },
            { name: a.Sa, a: a.tp, attributes: { powerDamage: .3, powerDamageArmor: .5 } }, 
            { name: a.Pv, a: a.up, attributes: { turretRestorePct: .5, rangePct: .4 } },
            { name: a.Dg, a: a.di, attributes: { ATTR_DMG: 55 } },
            { name: a.Ov, a: a.vp, attributes: { ATTR_PCT: .6 } }], 
                type: d.type.tech
        }; 
        
        d.Je = { h: ["baseRechargeSpeed", "damage", "force"], g: !0, icon: "HavocStrike", 
        evolutions: [
            { name: a.Je, a: a.Sp, attributes: { baseRechargeSpeed: 8, damage: 600, force: 650 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.ua, attributes: { poweDamage: .25,
                    powerForce: .25
                } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .35, powerForce: .35 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .3 } },
            { name: a.Gf, a: a.Pp, attributes: { weaponDamage: .25, ATTR_TIME: 5 } },
            { name: a.P, a: a.Qp, attributes: { meleeDamage: .4, ATTR_TIME: 5 } },
            { name: a.ga, a: a.p, attributes: { powerDamage: .55, powerForce: .55 } },
            { name: a.Hq, a: a.Rp, attributes: { areaTargetBonus: 2, radius: 3 } }]
        }; 
        
        d.Ke = { h: ["baseRechargeSpeed", "missileRefire", "damage", "radius", "force"], g: !0, icon: "MissileLauncher", 
        evolutions: [
            { name: a.Ke, a: a.Yp, attributes: { baseRechargeSpeed: 3,
                    missileRefire: 4, damage: 200, radius: .5, force: 200, shieldStrength: -.5
                } },
            { name: a.Hh, a: a.Pg, attributes: { missileFrequency: .1 } },
            { name: a.Ks, a: a.Tp, attributes: { powerDamage: .3, powerForce: .3 } },
            { name: a.kx, a: a.Up, attributes: { shieldStrength: .4 } },
            { name: a.ym, a: a.Vp, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.Hh, a: a.Pg, attributes: { missileFrequency: .35 } },
            { name: a.Sa, a: a.Mq, attributes: { powerDamageArmor: .5 } },
            { name: a.Bq, a: a.Wp, attributes: { ATTR_INT: 2, powerDamage: -.25, powerForce: .25 } },
            { name: a.Pl, a: a.Xp, attributes: { poweDamage: 1.5,
                    powerForce: 1.5, radiusPct: 3
                }
            }]
        }; 
        
        d.Le = { h: ["baseRechargeSpeed", "hexShield", "duration"], g: !0, icon: "HexShield", 
        evolutions: [
            { name: a.Le, a: a.fq, attributes: { baseRechargeSpeed: 8, hexShield: 2E3, duration: 18 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Od, a: a.Qg, attributes: { hexShieldStrength: .2 } },
            { name: a.Ru, a: a.aq, attributes: { ATTR_DMG: 400, radius: 3 } },
            { name: a.Od, a: a.Qg, attributes: { hexShieldStrength: .3 } },
            { name: a.Oc, a: a.bq, attributes: { ATTR_DMG: 500, ATTR_TIME: 5 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: 1 } },
            { name: a.Em, a: a.cq, attributes: { globalDamage: .1 } },
            { name: a.hr, a: a.dq, attributes: { hexShieldStrength: .4 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1.5 }, type: d.type.tech
        }; 
        
        d.Gc = { h: ["damage", "radius"], g: !0, icon: "HomingGrenade", M: !0, 
        evolutions: [
            { name: a.Gc, a: a.jq, attributes: { damage: 800, radius: 2 } },
            { name: a.fd, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.ec, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.fd, a: a.ka, attributes: { grenadeCapacity: 1 } }, 
            { name: a.zg, a: a.gq, attributes: { powerDOT: .5, ATTR_TIME: 5, fireDoT: true } },
            { name: a.Sa, a: a.hq, attributes: { powerDamageArmor: .6, homingGrenadeArmor: .5, ATTR_TIME: 8 } }, 
            { name: a.Py, a: a.iq, attributes: { ATTR_PCT: .6 } }], 
            pb: function (c) { 
                var d = {}, e; 
                for (e in c) { 
                    var z = e; 
                    "homingGrenadeArmor" == e && (z = "enemyArmorWeakening"); 
                    d[z] = d[z] ? d[z] + c[e] : c[e] 
                } 
                return d 
            }, 
            is_grenade_power: !0, type: d.type.tech
        }; 
        
        d.Hc = { Z: { radius: a.Yn }, h: ["baseRechargeSpeed", "radius", "globalDamage", "accuracy", "movementSpeed"], g: !0, icon: "Supercharge", 
            evolutions: [
            { name: a.Hc, a: a.Aq, attributes: { baseRechargeSpeed: 3,
                    radius: 15, globalDamage: .05, accuracy: .1, movementSpeed: .05, shieldStrength: -.5
                } },
            { name: a.jc, a: a.Zg, attributes: { movementSpeed: .05 } },
            { name: a.l, a: a.Jc, attributes: { globalDamage: .025 } },
            { name: a.kc, a: a.wq, attributes: { globalRecharge: .2 } },
            { name: a.qi, a: a.Nq, attributes: { accuracy: .15 } },
            { name: a.J, a: a.xq, attributes: { globalPowerDamage: .15 } },
            { name: a.hf, a: a.yq, attributes: { weaponROF: .15 } },
            { name: a.My, a: a.zq, attributes: { movementSpeed: .1, radiusPct: .6 } },
            { name: a.l, a: a.Jc, attributes: { globalDamage: .1 } }]
        }; 
        
        d.tb = { h: ["baseRechargeSpeed", "damage"], g: !0, icon: "Incinerate", 
            evolutions: [
            { name: a.tb, a: a.Kq, attributes: { baseRechargeSpeed: 8, damage: 330, fireDoT: true} },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 1.5 } },
            { name: a.Al, a: a.Iq, attributes: { powerDOT: .5, ATTR_TIME: 8 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.So, a: a.Jq, attributes: { freezeDamage: 1 } },
            { name: a.Sa, a: a.Ug, attributes: { powerDamageArmor: .5 } }],
                i: { health: 1, armor: 1.5, barrier: .5, shield: .5 }, type: d.type.tech
        }; 
        
        d.td = { h: ["dot", "duration", "radius"], g: !0, icon: "InfernoGrenade", M: !0, 
        evolutions: [
            { name: a.td, a: a.Pq, attributes: { dot: 150, duration: 8, radius: 5, fireDoT: true } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.Sa, a: a.Ic, attributes: { powerDamageArmor: .5 } },
            { name: a.nv, a: a.Oq, attributes: { radiusPct: .5, ATTR_INT: 1 } }],
            i: { health: 1, armor: 1.5, barrier: 1, shield: 1 }, is_grenade_power: !0, is_inferno_glitched: true
        }; 
        
        d.hc = { h: ["baseRechargeSpeed", "damage", "force"], g: !0, icon: "Lash", 
        evolutions: [
            { name: a.hc, a: a.lr, attributes: { baseRechargeSpeed: 6, damage: 150, force: 1200 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.zb, a: a.rd, attributes: { comboDamage: .5, comboForce: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } }, 
            { name: a.og, a: a.ir, attributes: { ATTR_PCT: 1, ATTR_TIME: 10, powerDOT: 1 } },
            { name: a.po, a: a.jr, attributes: { ATTR_PCT: .35, lashCombo: 1 } },
            { name: a.lx, a: a.kr, attributes: {} }], 
            type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.wd = { h: ["damage", "radius", "duration"], g: !1, icon: "LiftGrenade", M: !0, 
        evolutions: [
            { name: a.wd, a: a.qr, attributes: { damage: 900, radius: 5, duration: 4 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .5 } },
            { name: a.hy, a: a.or, attributes: { ATTR_TIME: 3 } },
            { name: a.oe, a: a.pr, attributes: { powerDamage: .3, radiusPct: .3 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, is_grenade_power: !0, type: d.type.biotic
        }; 
        
        d.yd = { h: ["baseRechargeSpeed", "duration", "weaponROF", "accuracy"], g: !0, icon: "Marksman", 
        evolutions: [
            { name: a.yd, a: a.Bs, attributes: { baseRechargeSpeed: 6, duration: 6, weaponROF: .25, accuracy: .35 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .3 } },
            { name: a.Kf, a: a.Lq, attributes: { accuracy: .15 } },
            { name: a.ro, a: a.ys, attributes: { weaponROF: .15 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .4 } },
            { name: a.ca, a: a.zs, attributes: { ATTR_PCT: .25, headshotMod: .3125 } },
            { name: a.Ri, a: a.As, attributes: { accuracy: .1, weaponROF: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } }]
        }; 
        
        d.Te = { h: ["damage", "force", "radius"], g: !1, icon: "MultiFragGrenade", M: !0, 
        evolutions: [
            { name: a.Te, a: a.Qs, attributes: { damage: 350, force: 1E3, radius: 4 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.ga, a: a.ua, attributes: { poweDamage: .2, powerForce: .2 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .2 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .35 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.Cp, a: a.Ps, attributes: { ATTR_INT: 2 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .5, powerForce: .5 } }], 
            is_grenade_power: !0
        }; 
        
        d.Ue = { Z: { damage: a.ll, duration: a.Fd }, h: ["damage", "poison", "duration", "paralyze", "range"], g: !1, icon: "VenomTippedBlades", M: !0, 
            evolutions: [
            { name: a.Ue, a: a.st, attributes: { damage: 1200, poison: 50, duration: 8, paralyze: 5, range: 15 } },
            { name: a.fd, a: a.th, attributes: { grenadeCapacity: 1 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2, poisonDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3, poisonDamage: .3 } },
            { name: a.fd, a: a.th, attributes: { grenadeCapacity: 1 } }, 
            { name: a.Range, a: a.gc, attributes: { rangePct: .5 } },
            { name: a.Fd, a: a.pt, attributes: { paralyzeDuration: .4, powerDuration: .4 } }, 
            { name: a.Wn, a: a.qt, attributes: { powerDamage: .4, poisonDamage: .6 } },
            { name: a.ho, a: a.rt, attributes: { ATTR_TIME: 3, bladeDamage: 400 } }],
            is_grenade_power: !0
        }; 
        
        d.Bd = { h: ["damage", "force", "radius"], g: !0, icon: "Discharge", 
        evolutions: [
            { name: a.Bd, a: a.xt, attributes: { damage: 350, force: 450, radius: 4 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .4 } },
            { name: a.kc, a: a.tt, attributes: { globalRecharge: .15, ATTR_TIME: 15 } },
            { name: a.Hp, a: a.ut, attributes: { ATTR_PCT: .5, powerDamage: -.4, powerForce: -.4 } },
            { name: a.Xe, a: a.vt, attributes: { powerDamageArmor: 1,
                    powerDamageBarrier: 1, powerDamageShield: 1
                } },
            { name: a.Bz, a: a.wt, attributes: { ATTR_PCT: .25 } }],
            i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.Rb = { h: ["baseRechargeSpeed", "overload"], g: !1, icon: "Overload", 
        evolutions: [
            { name: a.Rb, a: a.Mt, attributes: { baseRechargeSpeed: 8, overload: 220 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.gg, a: a.It, attributes: { areaTargetBonus: 1, radius: 8, ATTR_PCT: .6 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.ot, a: a.Jt, attributes: { neuralShock: 1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.gg, a: a.Kt, attributes: { powerDamage: .15, areaTargetBonus: 1, radius: 8, ATTR_PCT: .6 } },
            { name: a.Nd, a: a.Lt, attributes: { powerDamageBarrier: 1, powerDamageShield: 1 } }],
            i: { health: .5, armor: .5, barrier: 3, shield: 3 }, type: d.type.tech
        }; 
        
        d.We = { h: ["damage", "radius"], g: !1, icon: "PalmBlaster", 
        evolutions: [
            { name: a.We, a: a.Vt, attributes: { damage: 400, radius: 4, ATTR_PCT: .4 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .5 } },
            { name: a.$q, a: a.St, attributes: {} }, 
            { name: a.An, a: a.Tt, attributes: { ATTR_PCT: .5 } },
            { name: a.Sa, a: a.Ic, attributes: { powerDamageArmor: .75 } },
            { name: a.Nd, a: a.Ut, attributes: { powerDamageBarrier: .75, powerDamageShield: .75 } }]
        }; 
        
        d.Ye = { Z: { damage: a.bg, duration: a.Fd }, h: ["baseRechargeSpeed", "range", "damage", "poison", "duration"], g: !1, icon: "LineStrike", 
            evolutions: [
            { name: a.Ye, a: a.zu, attributes: { baseRechargeSpeed: 8, range: 12, damage: 500, poison: 75, duration: 5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2, poisonDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3, poisonDamage: .3 } },
            { name: a.Range, a: a.gc, attributes: { rangePct: .4 } }, 
            { name: a.Fd, a: a.wu, attributes: { powerDuration: .6 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.vu, a: a.xu, attributes: { poisonDamage: .5, ATTR_INT: 2, ATTR_TIME: 4 } }, 
            { name: a.nn, a: a.yu, attributes: { rangePct: -.4 } }], 
                type: d.type.biotic
        }; 
        
        d.lc = { h: ["baseRechargeSpeed", "damage", "radius"],
            g: !0, icon: "ProximityMine", 
            evolutions: [
            { name: a.lc, a: a.Lu, attributes: { baseRechargeSpeed: 10, damage: 400, radius: 3 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .5 } },
            { name: a.qe, a: a.Ju, attributes: { enemyDamageTaken: .2, ATTR_TIME: 8 } },
            { name: a.sf, a: a.Ku, attributes: { enemyMovementSpeed: -.3, ATTR_TIME: 8 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } }]
        };
        d.Mc = { h: ["baseRechargeSpeed", "duration"], g: !0, icon: "Pull", 
        evolutions: [
            { name: a.Mc, a: a.Qu, attributes: { baseRechargeSpeed: 4, duration: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .5 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: 1 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 2.5 } },
            { name: a.lh, a: a.Nu, attributes: { ATTR_DMG: 75 } },
            { name: a.Ae, a: a.Ou, attributes: { enemyDamageTaken: .3 } },
            { name: a.yn, a: a.Pu, attributes: { powerDuration: .5, comboDamage: .75, comboForce: .75 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: 1.5 }
            }], type: d.type.biotic
        }; 
        
        d.ab = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.jj, a: a.kj, attributes: { encumbrance: 10, globalPowerDamage: .05, globalPowerForce: .05, weaponDamage: .05 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.zc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.bf = { h: ["weaponDamage", "stability", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.yj, a: a.zj, attributes: { encumbrance: 15, stability: .2, weaponDamage: .075 } },
            { name: a.Ff, a: a.ah, attributes: { stability: .15 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.gd, a: a.hd, attributes: {
                    weaponDamage: .075,
                    stability: .1
                } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 25 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.de, a: a.se, attributes: { weaponWeightAssault: .3 } },
            { name: a.gd, a: a.hd, attributes: { weaponDamage: .1, stability: .1 } }]
        }; 
        
        d.Hd = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.ce, a: a.Qj, attributes: {
                    globalPowerDamage: .1, globalPowerForce: .1, weaponDamage: .025,
                    encumbrance: 10
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.tu, a: a.Pj, attributes: { weaponWeightPistol: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.Zu = { h: ["weaponDamage",
                "globalDuration", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
                evolutions: [
                { name: a.ce, a: a.Nj, attributes: { weaponDamage: .05, globalDuration: .15, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.Cu, a: a.Lj, attributes: { globalDuration: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.xn, a: a.Mj, attributes: { globalDuration: .25, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.de, a: a.se, attributes: { weaponWeightAssault: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.Id = { Z: { ammoCapacity: a.Uh }, h: ["weaponDamage", "globalPowerDamage", "ammoCapacity", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
            evolutions: [
            { name: a.tk, a: a.xk, attributes: { weaponDamage: .025, globalPowerDamage: .075, globalPowerForce: .075, encumbrance: 15, ammoCapacity: .1 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.uk, attributes: { weaponDamage: .075, ammoCapacity: .05 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 25 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.Ly, a: a.vk, attributes: { weaponWeightShotgun: .25, weaponWeightSniper: .25 } },
            { name: a.wm, a: a.wk, attributes: { weaponDamage: .1, ammoCapacity: .1 } }]
        }; 
        
        d.cf = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.we, a: a.rn, attributes: {
                    weaponDamage: .05, globalPowerDamage: .1, globalPowerForce: .1,
                    encumbrance: 10
                } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .15, globalPowerForce: .15, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .2, globalPowerForce: .2 } },
            { name: a.ca, a: a.la, attributes: { headshot: .3, bossHeadhot: .3 } },
            { name: a.nb, a: a.qn, attributes: { weaponWeightPistol: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .125 } }]
        }; 
        
        d.$u = { Z: { baseRechargeSpeed: a.Kl }, h: ["weaponDamage", "globalPowerDamage", "baseRechargeSpeed"], g: !1, icon: "MPPassive", M: !0, 
            evolutions: [
            { name: a.Mn, a: a.On, attributes: { weaponDamage: .05, globalPowerDamage: .05, globalPowerForce: .05, baseRechargeSpeed: 60 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .125, globalPowerForce: .125 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.Jl, a: a.Nn, attributes: { rechargeSpeed: 1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.av = { Z: { ammoCapacity: a.Uh }, h: ["weaponDamage", "stability", "ammoCapacity", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
            evolutions: [
            { name: a.Lg, a: a.gp, attributes: { ammoCapacity: .1, encumbrance: 20, stability: .25, weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.Vh, a: a.Mg, attributes: { ammoCapacity: .05, stability: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.Vh, a: a.Mg, attributes: { ammoCapacity: .15, stability: .15 } },
            { name: a.nb, a: a.zc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.fp, attributes: { gethWeaponDamage: .05, weaponDamage: .1 } }]
        }; 
        
        d.df = { Z: { gethWeaponDamage: a.xp }, h: ["weaponDamage", "gethWeaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
            evolutions: [
            { name: a.kt, a: a.nt, attributes: {
                    weaponDamage: .025,
                    gethWeaponDamage: .05, globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 10
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.qy, a: a.lt, attributes: {
                    weaponWeightAssault: .25,
                    weaponWeightSniper: .25
                } },
            { name: a.n, a: a.mt, attributes: { weaponDamage: .1, gethWeaponDamage: .05 } }]
        }; 
        
        d.bv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.jh, a: a.Qe, attributes: { weaponDamage: .05, globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 10 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: {
                    globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20
                } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.qf, a: a.te, attributes: { weaponWeightShotgun: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.ef = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.jh, a: a.Qe, attributes: { weaponDamage: .025, globalPowerDamage: .025, globalPowerForce: .025, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: {
                    globalPowerDamage: .05, globalPowerForce: .05
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 30 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.qf, a: a.te, attributes: { weaponWeightShotgun: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.cv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive",
            M: !0, 
            evolutions: [
            { name: a.kh, a: a.Qe, attributes: { weaponDamage: .025, globalPowerDamage: .025, globalPowerForce: .025, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 30 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.qf, a: a.te, attributes: { weaponWeightShotgun: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.dv = { h: ["weaponDamage", "globalPowerDamage", "grenadeCapacity"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.oh, a: a.Xs, attributes: { weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, grenadeCapacity: 1 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.zm, a: a.Vs, attributes: {
                    globalPowerDamage: .1, globalPowerForce: .1, grenadeCapacity: 1
                } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .2, globalPowerForce: .2 } },
            { name: a.CC, a: a.Ws, attributes: { weaponDamage: .1, grenadeCapacity: 1 } }]
        }; 
        
        d.ev = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.Jz, a: a.Kz, attributes: { weaponDamage: .05, globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 10 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.Kc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.fv = { h: ["weaponDamage", "globalPowerDamage",
                "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
                evolutions: [
                { name: a.ph, a: a.Ad, attributes: { encumbrance: 10, globalPowerDamage: .1, globalPowerForce: .1, weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.Kc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.gv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.qh, a: a.Ad, attributes: { encumbrance: 10, globalPowerDamage: .1, globalPowerForce: .1, weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: {
                    globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20
                } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.Kc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.hv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.rh, a: a.Ad, attributes: { encumbrance: 10, globalPowerDamage: .05, globalPowerForce: .05, weaponDamage: .05 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.Kc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.iv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.sh, a: a.Ad, attributes: { encumbrance: 10, globalPowerDamage: .1, globalPowerForce: .1, weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.Kc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.zh = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.Yt, a: a.Zt, attributes: { weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.vh, a: a.Gh, attributes: { weaponWeightPistol: .25, weaponWeightShotgun: .25 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.Ah = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.$e, a: a.af, attributes: { weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: {
                    globalPowerDamage: .1, globalPowerForce: .1
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.jw, a: a.Su, attributes: { weaponWeightSMG: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.Bh = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.$e, a: a.af, attributes: {
                    weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.zc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        };
        d.jv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.$e, a: a.af, attributes: { weaponDamage: .075, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.nb, a: a.zc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .125 } }]
        }; 
        
        d.Ch = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.rw, a: a.tw, attributes: { weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.Ky, a: a.sw, attributes: { weaponWeightSniper: .3 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.ff = { h: ["weaponDamage", "stability", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.wA, a: a.xA, attributes: { encumbrance: 15, stability: .2, weaponDamage: .1 } },
            { name: a.Ff, a: a.ah, attributes: { stability: .15 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.gd, a: a.hd, attributes: { weaponDamage: .1, stability: .1 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .15, globalPowerForce: .15, encumbrance: 25 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .2, globalPowerForce: .2 } },
            { name: a.ca, a: a.la, attributes: { headshot: .3, bossHeadhot: .3 } },
            { name: a.de, a: a.se, attributes: { weaponWeightAssault: .3 } },
            { name: a.gd, a: a.hd, attributes: { weaponDamage: .125, stability: .1 } }]
        }; 
        
        d.kv = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive",
            M: !0, 
            evolutions: [
            { name: a.RB, a: a.SB, attributes: { weaponDamage: .025, globalPowerDamage: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.vh, a: a.Gh, attributes: {
                    weaponWeightPistol: .25,
                    weaponWeightShotgun: .25
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.lv = { Z: { protheanWeaponDamage: a.jg }, h: ["weaponDamage", "protheanWeaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
            evolutions: [
            { name: a.VB, a: a.XB, attributes: { weaponDamage: .025, protheanWeaponDamage: .05, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .2, globalPowerForce: .2 } },
            { name: a.jg, a: a.WB, attributes: { weaponDamage: .1, protheanWeaponDamage: .05 } }]
        }; 
        
        d.Jd = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.fC, a: a.hC, attributes: {
                    weaponDamage: .025, globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 10
                } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .025 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .1, globalPowerForce: .1 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .15, globalPowerForce: .15 } },
            { name: a.Eb, a: a.gC, attributes: { shieldBoostPassive: .3 } },
            { name: a.nb, a: a.zc, attributes: { weaponWeight: .2 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        };
        d.gf = { h: ["weaponDamage", "globalPowerDamage", "encumbrance"], g: !1, icon: "MPPassive", M: !0, 
        evolutions: [
            { name: a.jC, a: a.lC, attributes: { weaponDamage: .05, globalPowerDamage: .05, globalPowerForce: .05, encumbrance: 10 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .05 } },
            { name: a.J, a: a.N, attributes: { globalPowerDamage: .05, globalPowerForce: .05 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .075 } },
            { name: a.oa, a: a.pa, attributes: { globalPowerDamage: .1, globalPowerForce: .1, encumbrance: 20 } },
            { name: a.J, a: a.N, attributes: {
                    globalPowerDamage: .15, globalPowerForce: .15
                } },
            { name: a.ca, a: a.la, attributes: { headshot: .2, bossHeadhot: .2 } },
            { name: a.Wx, a: a.kC, attributes: { weaponWeightAssault: .25, weaponWeightShotgun: .25 } },
            { name: a.n, a: a.q, attributes: { weaponDamage: .1 } }]
        }; 
        
        d.sv = { h: ["baseRechargeSpeed", "dot", "duration", "damageReduction"], g: !0, icon: "Reave", 
        evolutions: [
            { name: a.Dh, a: a.Fh, attributes: { baseRechargeSpeed: 8, dot: 100, duration: 4, damageReduction: .15 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .35 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .4 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 3 } },
            { name: a.xc, a: a.fc, attributes: { damageReduction: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Vf, a: a.Ne, attributes: { powerDamageArmor: .75, powerDamageBarrier: .75 } },
            { name: a.ne, a: a.Eh, attributes: { powerDamage: .3, powerDuration: .3, damageReduction: .15 } }],
            i: { health: 1, armor: 1.5, barrier: 2, shield: .5 }, type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.tv = { h: ["baseRechargeSpeed", "dot", "duration", "damageReduction"], g: !0, icon: "Reave", 
        evolutions: [
            { name: a.Dh, a: a.Fh, attributes: { baseRechargeSpeed: 8, dot: 70, duration: 4, damageReduction: .15 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.W, a: a.Ca, attributes: { powerDuration: .35 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .4 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 3 } }, 
            { name: a.xc, a: a.fc, attributes: { damageReduction: .1 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Vf, a: a.Ne, attributes: { powerDamageArmor: .75, powerDamageBarrier: .75 } }, 
            { name: a.ne, a: a.Eh, attributes: { powerDamage: .3, powerDuration: .3, damageReduction: .15 } }],
            i: { health: 1, armor: 1.5, barrier: 2, shield: .5 },
            type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.Kd = { Z: { radius: a.yg, range: a.uw }, h: ["baseRechargeSpeed", "damage", "radius", "range"], g: !0, icon: "ReconMine", 
            evolutions: [
            { name: a.Kd, a: a.zv, attributes: { baseRechargeSpeed: 20, damage: 700, radius: 6, range: 8, ATTR_TIME: 3 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.xv, attributes: { radiusPct: .5, rangePct: .5 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Sa, a: a.Ug, attributes: { powerDamageArmor: .75 } },
            { name: a.Rq, a: a.yv, attributes: { enemyDamageTaken: .25, enemyMovementSpeed: -.3 } }], type: d.type.tech
        }; 
        
        d.kf = { h: ["repairMatrix", "duration", "RMDR", "movementSpeed"], g: !0, icon: "RepairMatrix", M: !0, 
        evolutions: [
            { name: a.kf, a: a.Hv, attributes: { repairMatrix: 75, duration: 8, RMDR: .15, movementSpeed: .1 } },
            { name: a.hg, a: a.Ih, attributes: { grenadeCapacity: 1 } }, 
            { name: a.Rh, a: a.Jh, attributes: { repairShields: .2 } },
            { name: a.xz, a: a.Ev, attributes: { RMDR: .05, movementSpeed: .1 } },
            { name: a.Rh, a: a.Jh, attributes: { repairShields: .3 } },
            { name: a.hg, a: a.Ih, attributes: { grenadeCapacity: 1 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .5 } }, 
            { name: a.nr, a: a.Fv, attributes: { ATTR_TIME: 5 } },
            { name: a.Xn, a: a.Gv, attributes: { repairShields: .35, RMDR: .1 } }], 
            is_grenade_power: !0, pb: P
        }; 
        
        d.Nc = { Z: { duration: a.Gp, damage: a.Rf }, h: ["baseRechargeSpeed", "duration", "radius", "damage"], g: !0, icon: "Hacking", 
            evolutions: [
            { name: a.Nc, a: a.ow, attributes: { baseRechargeSpeed: 10, duration: 10, radius: 2.5, damage: 250 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .5 } },
            { name: a.Rf, a: a.kw, attributes: { powerDamage: .6 } },
            { name: a.lo, a: a.lw, attributes: { ATTR_DMG: 350, ATTR_INT: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Fk, a: a.mw, attributes: { ATTR_PCT: .5 } },
            { name: a.kA, a: a.nw, attributes: { powerDamage: .5, ATTR_TIME: 10, sabotageMelee: .5 } }],
            i: { health: 1, armor: 1, barrier: 1, shield: 2 }, type: d.type.tech
        }; 
        
        d.nf = { Z: { duration: a.Ns }, h: ["baseRechargeSpeed", "damage", "enemyMovementSpeed", "duration", "seekerSwarmDR"], g: !0, icon: "SeekerSwarm", 
            evolutions: [
            { name: a.nf, a: a.Bw, attributes: { baseRechargeSpeed: 24, damage: 150, enemyMovementSpeed: -.1, duration: 4, seekerSwarm: 3, seekerSwarmDR: 0 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .15 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.sf, a: a.xw, attributes: { enemyMovementSpeed: -.1, powerDuration: .4 } },
            { name: a.xc, a: a.yw, attributes: { seekerSwarmDR: .3 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.Cz, a: a.zw, attributes: { seekerSwarm: 1, seekerSwarmDR: .1 } },
            { name: a.ng, a: a.Aw, attributes: { powerDamage: .5, enemyMovementSpeed: -.15, powerDuration: .2 } }], type: d.type.biotic
        }; 
        
        d.Md = { Z: { damage: a.ci, petShield: a.ei }, h: ["baseRechargeSpeed", "damage", "petShield"], g: !1, icon: "SentryTurret", 
            evolutions: [
            { name: a.Md, a: a.Iw, attributes: { baseRechargeSpeed: 5, damage: 75, petShield: 1E3 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Ub, a: a.sd, attributes: { powerDamage: .3, petShieldStrength: .3 } },
            { name: a.Ub, a: a.sd, attributes: { powerDamage: .4, petShieldStrength: .4 } },
            { name: a.Oc, a: a.Ew, attributes: {} },
            { name: a.nm, a: a.Fw, attributes: { ATTR_TIME: 3 } },
            { name: a.Bj, a: a.Gw, attributes: { powerDamageArmor: 1 } },
            { name: a.Nh, a: a.Hw, attributes: { ATTR_DMG: 300, radius: 2.5 } },
            { name: a.Dg, a: a.di, attributes: { ATTR_DMG: 65 } }], type: d.type.tech
        }; 
        
        d.of = { h: ["baseRechargeSpeed", "shadowstrike", "damageReduction"], g: !0, icon: "ShadowStrike", 
        evolutions: [
            { name: a.of, a: a.Uw, attributes: { baseRechargeSpeed: 8, shadowstrike: 600, damageReduction: 0 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.qg, a: a.Rw, attributes: { damageReduction: .4, ATTR_TIME: 5 } },
            { name: a.Bn, a: a.Sw, attributes: { powerDOT: .4, ATTR_TIME: 5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } },
            { name: a.dx, a: a.Tw, attributes: { movementSpeed: .15, ATTR_TIME: 4 } }], type: d.type.tech
        }; 
        
        d.Eb = { Z: { duration: a.Nv }, h: ["baseRechargeSpeed", "radius", "shieldBoost", "shieldBoostRegen", "duration", "damageReduction"], g: !0, icon: "ShieldBoost", 
            evolutions: [
            { name: a.Eb, a: a.ax, attributes: { baseRechargeSpeed: 12, radius: 5, shieldBoost: 400, shieldBoostRegen: 100, duration: 3, ATTR_TIME: 3, damageReduction: 0
                } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Qh, a: a.Ph, attributes: { shieldBoostPower: .3 } },
            { name: a.ec, a: a.ma, attributes: { radiusPct: .4 } },
            { name: a.Qh, a: a.Ph, attributes: { shieldBoostPower: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.Cv, a: a.Yw, attributes: { shieldRechargeRate: .2, ATTR_TIME: 12 } },
            { name: a.W, a: a.Zw, attributes: { powerDuration: 1 } },
            { name: a.Iu, a: a.$w, attributes: { shieldBoostPower: .5, damageReduction: .5, ATTR_TIME: 6, ATTR_PCT: .9 } }]
        }; 
        
        d.Fb = { h: ["baseRechargeSpeed", "damage", "force", "radius", "range"], g: !1, icon: "Shockwave", 
                evolutions: [
                { name: a.Fb, a: a.Ax, attributes: { baseRechargeSpeed: 8, damage: 300, force: 700, radius: 2, range: 16 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.ga, a: a.ua, attributes: { powerDamage: .25, powerForce: .25 } },
            { name: a.ga, a: a.ua, attributes: { powerDamage: .3, powerForce: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } }, 
            { name: a.zb, a: a.rd, attributes: { comboDamage: .65, comboForce: .65 } },
            { name: a.jf, a: a.yx, attributes: { rangePct: .5 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } },
            { name: a.rr, a: a.zx, attributes: {} }],
                i: { health: 1, armor: 1, barrier: 1.5, shield: 1 }, type: d.type.biotic
        }; 
        
        d.rf = { Z: { knockdown: a.ar }, h: ["baseRechargeSpeed", "damage", "radius", "knockdown", "siegeCharge", "siegeDR"], g: !0, icon: "SiegePulse", 
            evolutions: [
            { name: a.rf, a: a.cy, attributes: { baseRechargeSpeed: 24, damage: 600, radius: 1.5, knockdown: .35, siegeCharge: 3, siegeDR: 0 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .6 } },
            { name: a.qg, a: a.$x, attributes: { siegeDR: .3 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } },
            { name: a.yt, a: a.ay, attributes: { siegeCharge: 1, knockdown: .15, siegeDR: .1 } },
            { name: a.Kv, a: a.by, attributes: { ATTR_PCT: .6, powerDamageArmor: .4, powerDamageBarrier: .4, powerDamageShield: .4 } }],
            i: { health: 1, armor: 1.35, barrier: 1.35, shield: 1.35 }, type: d.type.tech
        }; 
        
        d.Pc = { h: ["baseRechargeSpeed", "duration", "radius", "dot"], g: !0, icon: "Singularity", 
        evolutions: [
            { name: a.Pc, a: a.fy, attributes: { baseRechargeSpeed: 8, duration: 8, radius: 1.5, dot: 100 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: 1.5 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .35 } }, 
            { name: a.lh, a: a.dy, attributes: { ATTR_DMG: 50 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .5 } }, 
            { name: a.zb, a: a.ey, attributes: { ATTR_DMG: 500, ATTR_INT: 7 } }], type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.Pd = { h: ["baseRechargeSpeed", "damage", "force", "radius"], g: !0, icon: "WhipSmash", 
        evolutions: [
            { name: a.Pd, a: a.ly, attributes: { baseRechargeSpeed: 8, damage: 550, force: 450, radius: 1.5, range: 8 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ga, a: a.Yg, attributes: { powerDamage: .2, powerForce: .2 } },
            { name: a.ag, a: a.iy, attributes: { powerDamage: .3 } },
            { name: a.ye, a: a.jy, attributes: { powerDOT: .5, ATTR_TIME: 7.5 } },
            { name: a.ga, a: a.Yg, attributes: { powerDamage: .4, powerForce: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .4 } },
            { name: a.Sa, a: a.Ne, attributes: { powerDamageArmor: .75, powerDamageBarrier: .75 } },
            { name: a.ec, a: a.ky, attributes: { radiusPct: .5, areaTargetBonus: 1 } }],
            i: {
                health: 1, armor: 1.5, barrier: 1.5,
                shield: 1.5
            }, type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.Qd = { Z: { duration: a.Fg }, h: ["baseRechargeSpeed", "damage", "range", "duration", "enemyMovementSpeed"], g: !0, icon: "CryoCone", 
            evolutions: [
            { name: a.Qd, a: a.py, attributes: { baseRechargeSpeed: 8, damage: 250, range: 10, duration: 6, enemyArmorWeakening: .25, enemyMovementSpeed: -.15 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.jf, a: a.gc, attributes: { rangePct: .5 } },
            { name: a.zn, a: a.my, attributes: { poweDuration: .5, enemyMovementSpeed: -.2 } },
            { name: a.lg, a: a.Wg, attributes: { enemyDamageTaken: .1 } },
            { name: a.Am, a: a.ny, attributes: { powerDamage: .4, enemyArmorWeakening: .25 } },
            { name: a.iA, a: a.oy, attributes: { techCombo: 1 } }], 
            type: d.type.tech, cryo: true
        }; 
        
        d.Qc = { h: ["baseRechargeSpeed", "duration"], g: !0, icon: "Stasis", 
        evolutions: [
            { name: a.Qc, a: a.Xy, attributes: { duration: 6, baseRechargeSpeed: 10 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .3 } }, 
            { name: a.W, a: a.Ca, attributes: { powerDuration: .4 } },
            { name: a.Yy, a: a.Ty, attributes: { stasisStrength: 1.5 } },
            { name: a.Kb, a: a.Uy, attributes: { ATTR_PCT: .3 } }, 
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } },
            { name: a.zl, a: a.Vy, attributes: {} },
            { name: a.oC, a: a.Wy, attributes: { enemyDamageTaken: .5, stasisStrength: .35 } }], 
            type: d.type.biotic, is_biotic_primer: true
        }; 
        
        d.Rc = { h: ["damage", "radius"], g: !1, icon: "StickyGrenade", M: !0, 
        evolutions: [
            { name: a.Rc, a: a.$y, attributes: { damage: 1100, radius: 2 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 1 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.Y, a: a.ma, attributes: { radiusPct: .3 } },
            { name: a.La, a: a.ka, attributes: { grenadeCapacity: 2 } }, 
            { name: a.cd, a: a.Vg, attributes: { powerDamageArmor: .5 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.Mu, a: a.Zy, attributes: { ATTR_TIME: 15, radiusPct: .5 } }], 
            is_grenade_power: !0
        }; 
        
        d.Rd = { Z: { stimpackDamage: a.l }, h: ["stimpackShields", "stimpackDamage", "duration"], g: !0, icon: "StimPack", M: !0, 
            evolutions: [
            { name: a.Rd, a: a.dz, attributes: { stimpackShields: 1200, stimpackDamage: .05, duration: 6 } },
            { name: a.uh, a: a.Wh, attributes: { grenadeCapacity: 1 } }, 
            { name: a.l, a: a.Xh, attributes: { stimpackDamage: .025 } },
            { name: a.l, a: a.Xh, attributes: { stimpackDamage: .05 } },
            { name: a.zd, a: a.az, attributes: { stimpackShieldStrength: .4 } }, 
            { name: a.uh, a: a.Wh, attributes: { grenadeCapacity: 1 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .5 } },
            { name: a.n, a: a.bz, attributes: { stimpackWeaponDamage: .08 } }, 
            { name: a.yz, a: a.cz, attributes: { stimpackShieldStrength: .6, stimpackMeleeDamage: .25 } }], 
                pb: function (c) {
                    var d = {}, e; 
                    for (e in c) {
                        var z = e; 
                        "stimpackDamage" == e ? z = "globalDamage" : 
                        "stimpackMeleeDamage" == e ? z = "meleeDamage" : 
                        "stimpackShields" == e ? z = "maxShield" :
                        "stimpackShieldStrength" == e ? z = "maxShieldStrength" : 
                        "stimpackWeaponDamage" == e && (z = "weaponDamage"); 
                        d[z] = c[e]
                    } 
                    return d
                }, 
            is_grenade_power: !0
        }; 
        
        d.Sd = { Z: { duration: a.Ap }, h: ["baseRechargeSpeed", "duration", "incapacitate", "damage"], g: !1, icon: "BatarianNet", 
            evolutions: [
            { name: a.Sd, a: a.pz, attributes: { baseRechargeSpeed: 6, damage: 600, duration: 6, incapacitate: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.ne, a: a.Tg, attributes: { powerDamage: .3, powerDuration: .3, incapacitateDuration: .3 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .4 } },
            { name: a.Rg, a: a.mz, attributes: { incapacitateDuration: 1 } },
            { name: a.ng, a: a.nz, attributes: { powerDamage: .4, netMovementSpeed: .3, ATTR_TIME: 10 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .45 } },
            { name: a.Xw, a: a.qd, attributes: { powerDamageBarrier: .5, powerDamageShield: .5 } },
            { name: a.Cn, a: a.oz, attributes: { netAOE: 150, radius: 6, ATTR_TIME: 1 } }], type: d.type.tech
        }; 
        
        d.tf = { h: ["baseRechargeSpeed", "ammoResupply", "grenadeResupply", "shieldStrength", "radius"], g: !0, icon: "SupplyTurret", 
        evolutions: [
            { name: a.tf, a: a.wz, attributes: { baseRechargeSpeed: 30,
                    ammoResupply: 17.5, grenadeResupply: 24, shieldStrength: .25, radius: 4, ATTR_TIME: 17.5
                } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Lh, a: a.Mh, attributes: { ammoFrequency: .15, grenadeFrequency: .15 } },
            { name: a.Lh, a: a.Mh, attributes: { ammoFrequency: .25, grenadeFrequency: .25 } },
            { name: a.Y, a: a.qz, attributes: { radiusPct: .4 } },
            { name: a.n, a: a.rz, attributes: { weaponDamage: .1 } },
            { name: a.J, a: a.sz, attributes: { globalPowerDamage: .1 } },
            { name: a.oo, a: a.uz, attributes: { ATTR_INT: 1 } },
            { name: a.zd, a: a.vz, attributes: { shieldStrength: .25 } }]
        };

        d.bb = { h: ["baseRechargeSpeed", "duration", "globalDamage"], g: !0, icon: "Cloak", 
        evolutions: [
            { name: a.bb, a: a.Vd, attributes: { baseRechargeSpeed: 10, globalDamage: .4, duration: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: 1.5 } },
            { name: a.l, a: a.Jc, attributes: { globalDamage: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .3 } },
            { name: a.P, a: a.Td, attributes: { meleeDamage: .5 } },
            { name: a.Kb, a: a.Ud },
            { name: a.ry, a: a.Nz, attributes: { tcDamageSniper: .25 } }] };

        d.Sz = { h: ["baseRechargeSpeed", "duration", "globalDamage"], g: !0, icon: "Cloak", 
        evolutions: [
            { name: a.bb, a: a.Vd, attributes: { baseRechargeSpeed: 10, globalDamage: .4, duration: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: 1.5 } },
            { name: a.l, a: a.Jc, attributes: { globalDamage: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .3 } },
            { name: a.P, a: a.Td, attributes: { meleeDamage: .5 } },
            { name: a.Kb, a: a.Ud },
            { name: a.Fx, a: a.Oz, attributes: { tcDamageShotgun: .25 } }] };

        d.Tz = { h: ["baseRechargeSpeed", "duration", "globalDamage"], g: !0, icon: "Cloak", 
        evolutions: [
            { name: a.bb, a: a.Vd, attributes: { baseRechargeSpeed: 10, globalDamage: .4, duration: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: 1.5 } },
            { name: a.l, a: a.Jc, attributes: { globalDamage: .4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .3 } },
            { name: a.P, a: a.Td, attributes: { meleeDamage: .5 } },
            { name: a.Kb, a: a.Ud },
            { name: a.dk, a: a.Pz, attributes: {
                    tcDamageAssault: .2, ATTR_TIME: 20
                }
            }]
        }; 
        
        d.Uz = { h: ["baseRechargeSpeed", "duration", "globalPowerDamage"], g: !0, icon: "Cloak", 
        evolutions: [
            { name: a.bb, a: a.Vd, attributes: { baseRechargeSpeed: 10, globalPowerDamage: .6, meleeDamage: .6, duration: 4 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: .3 } },
            { name: a.W, a: a.Ka, attributes: { powerDuration: 1.5 } },
            { name: a.l, a: a.Qz, attributes: { globalPowerDamage: .6, meleeDamage: .6 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .3 } },
            { name: a.P, a: a.Td, attributes: { meleeDamage: .5 } },
            { name: a.Kb, a: a.Ud },
            { name: a.J, a: a.Rz, attributes: { globalPowerDamage: .4 } }]
        }; 
        
        d.Sc = { Z: { enemyMovementSpeed: a.Os }, h: ["baseRechargeSpeed", "duration", "enemyDamageTaken", "enemyMovementSpeed"], g: !0, icon: "Damping", 
            evolutions: [
            { name: a.Sc, a: a.aA, attributes: { baseRechargeSpeed: 4, duration: 20, enemyDamageTaken: .15, enemyMovementSpeed: .15 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .5 } },
            { name: a.W, a: a.Ca, attributes: { powerDuration: .3 } },
            { name: a.n, a: a.Vz, attributes: { enemyWeaponDamageTaken: .075 } },
            { name: a.J, a: a.Wz, attributes: { enemyPowerDamageTaken: .075 } },
            { name: a.ca, a: a.Xz, attributes: { ATTR_PCT: .25 } },
            { name: a.jc, a: a.Yz, attributes: { enemyMovementSpeed: .15 } },
            { name: a.l, a: a.Zz, attributes: { enemyDamageTaken: .1 } },
            { name: a.xj, a: a.$z, attributes: { powerDuration: 1, ATTR_INT: 20 } }]
        }; 
        
        d.Gb = { Z: { armor: a.jo, radius: a.yg }, h: ["baseRechargeSpeed", "damageReduction", "armor", "radius"], g: !0, icon: "TechArmor", 
            evolutions: [
            { name: a.Gb, a: a.hA, attributes: { baseRechargeSpeed: 6, damageReduction: .35, armor: 400, radius: 3, globalRecharge: -.5 } },
            { name: a.k, a: a.eA, attributes: { rechargeSpeed: .25 } },
            { name: a.oe, a: a.ai, attributes: { powerDamage: .2, radiusPct: .2 } },
            { name: a.oe, a: a.ai, attributes: { powerDamage: .3, radiusPct: .3 } },
            { name: a.S, a: a.bi, attributes: { damageReduction: .05 } },
            { name: a.J, a: a.fA, attributes: { globalPowerDamage: .3, globalPowerForce: .3 } },
            { name: a.P, a: a.gA, attributes: { meleeDamage: .4 } },
            { name: a.kc, a: a.Ld, attributes: { globalRecharge: .3 } },
            { name: a.S, a: a.bi, attributes: { damageReduction: .1 } }],
            i: { health: 1, armor: 1, barrier: 1, shield: 1.5 }, pb: e, type: d.type.tech
        }; 
        
        d.nc = { h: ["baseRechargeSpeed", "force"], g: !1, icon: "Throw", 
        evolutions: [
            { name: a.nc, a: a.pA, attributes: { baseRechargeSpeed: 4, force: 600 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } },
            { name: a.Ee, a: a.Xg, attributes: { powerForce: .3 } }, 
            { name: a.Ee, a: a.Xg, attributes: { powerForce: .4 } },
            { name: a.Y, a: a.Pb, attributes: { radius: 2 } },
            { name: a.zb, a: a.rd, attributes: { comboDamage: .5, comboForce: .5 } }, 
            { name: a.vv, a: a.nA, attributes: {} },
            { name: a.ga, a: a.oA, attributes: { powerForce: .5, ATTR_DMG: 200 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .6 } }], 
            type: d.type.biotic
        }; 
        
        d.fb = { h: ["baseRechargeSpeed", "damage", "duration"], g: !0, icon: "Warp",            
        evolutions: [
            { name: a.fb, a: a.yC, attributes: { baseRechargeSpeed: 8, damage: 250, duration: 10, enemyArmorWeakening: .25, fireDoT: true } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .25 } }, 
            { name: a.l, a: a.p, attributes: { powerDamage: .2 } },
            { name: a.l, a: a.p, attributes: { powerDamage: .3 } },
            { name: a.zb, a: a.vC, attributes: { comboDamage: .5, comboForce: .5, comboRadius: .5 } }, 
            { name: a.mr, a: a.Tg, attributes: { powerDamage: .4, powerDuration: .6 } },
            { name: a.Ae, a: a.wC, attributes: { enemyWeaponDamageTaken: .15, enemyPowerDamageTaken: .15, ATTR_TIME: 10 } }, 
            { name: a.Xe, a: a.xC, attributes: { powerDamageArmor: .5, powerDamageBarrier: .5, enemyArmorWeakening: .25 } },
            { name: a.k, a: a.m, attributes: { rechargeSpeed: .35 } }],
            i: { health: 1, armor: 1.5, barrier: 2, shield: .5 }, type: d.type.biotic, is_biotic_primer: true
        }
    })(h.b = h.b || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires game.powers.js
     @requires locale.en.js
    */
    var h = h || {}, qa = h.Cb = h.Cb || {}, l = { health: 1, armor: .75, barrier: 1, shield: 1 }; 
    qa.Tb = { eb: 0, be: 1, ve: 2, OC: 3, vd: 4, Ze: 5, mf: 6, vf: 7, ge: 8, Ua: 9, Sb: 10, Cf: 11, Bf: 12, JC: 13 }; 
    qa.Oh = "adept soldier engineer sentinel infiltrator vanguard".split(" ");
    qa.Re = [[
        { id: "male-adept", name: a.dc, V: a.qq, d: "AdeptHumanMale.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Pc, h.b.fb, h.b.Fb, h.b.ab, h.b.Za] }, 
        { id: "female-adept", name: a.cc, V: a.kq, d: "AdeptHumanFemale.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Pc, h.b.fb, h.b.Fb, h.b.ab, h.b.Za] }, 
        { id: "asari-adept", name: a.be, V: a.Kj, d: "MP_Asari0.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Qc, h.b.fb, h.b.nc, h.b.Hd, h.b.Ga] },
        { id: "drell-adept", name: a.ve, V: a.pn, d: "MP_Drell0.png", health: 500, barrier: 250, base_encumbrance: .45, light_melee_base_dmg: 225, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.tv, h.b.Mc, h.b.Yb, h.b.cf, h.b.Be] },
        { id: "asari-justicar", name: a.ce, d: "MP_AsariComm.png", health: 500, barrier: 600, base_encumbrance: .4, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.ke, h.b.sv, h.b.Mc, h.b.Zu, h.b.Ga] }, 
        { id: "cerberus-adept", name: a.xg, V: a.$n, d: "MP_Cerberus.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 400, 
        heavy_melee_base_dmg: 350, Ra: 6, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Pc, h.b.Pd, h.b.hc, h.b.zh, h.b.Ga] },
        { id: "n7-fury", name: a.ph, d: "MP_AllianceADP.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 350, 
        heavy_melee_base_dmg: 350, Ra: 6, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1.5, shield: 1.5 }, powers: [h.b.bd, h.b.yc, h.b.nc, h.b.fv, h.b.Ga] },
        { id: "volus-adept", name: a.Bf, V: a.bC, d: "MP_VolusADP.png", health: 150, barrier: 500, base_encumbrance: .15, light_melee_base_dmg: 0, 
        heavy_melee_base_dmg: 150, heavy_melee_modifiers: l, powers: [h.b.Qc, h.b.ed, h.b.Eb, h.b.Jd, h.b.Ga] },
        { id: "krogan-shaman", name: a.dr, d: "MP_KroganADP.png", health: 1E3, barrier: 1E3, base_encumbrance: .3, light_melee_base_dmg: 300, 
        heavy_melee_base_dmg: 700, heavy_melee_modifiers: l, powers: [h.b.rb, h.b.fb, h.b.Fb, h.b.ef, h.b.kd] }, 
        { id: "batarian-slasher", name: a.Bk, d: "MP_BatarianADP.png", health: 750, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 190, 
        heavy_melee_base_dmg: 1E3, heavy_melee_modifiers: l, powers: [h.b.hc, h.b.fb, h.b.Yb, h.b.Id, h.b.ac] },
        { id: "awakened-collector", name: a.gk, d: "MP_CollectADP.png", health: 500, barrier: 750, base_encumbrance: .3, light_melee_base_dmg: 450, light_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, 
        heavy_melee_base_dmg: 300, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, race: qa.Tb.Sb, powers: [h.b.re, h.b.nf, h.b.yc, h.b.lv, h.b.Bo] }
    ], [
        { id: "male-soldier", name: a.dc, V: a.uq, d: "SoldierHumanMale.png", health: 500, shield: 500, base_encumbrance: .45, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.sc, h.b.wc, h.b.Cc, h.b.ab, h.b.Za] },
        { id: "female-soldier", name: a.cc, V: a.oq, d: "SoldierHumanFemale.png", health: 500, shield: 500, base_encumbrance: .45, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.sc, h.b.wc, h.b.Cc, h.b.ab, h.b.Za] },
        { id: "krogan-soldier", name: a.vd, V: a.er, d: "MP_Krogan0.png", health: 750, shield: 1E3, base_encumbrance: .6, light_melee_base_dmg: 300, XC: "Krogan Headbutt", 
        heavy_melee_base_dmg: 700, heavy_melee_modifiers: l, powers: [h.b.ld, h.b.Xb, h.b.td, h.b.ef, h.b.kd] },
        { id: "turian-soldier", name: a.vf, V: a.vA, d: "MP_Turian0.png", health: 500, shield: 750, base_encumbrance: .65, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 675, heavy_melee_modifiers: l, powers: [h.b.yd, h.b.wc, h.b.lc, h.b.ff, h.b.ac] },
        { id: "bf3-soldier", name: a.Dk, V: a.Ek, d: "MP_BF_HMM0.png", health: 500, shield: 500, base_encumbrance: .45, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.sc, h.b.Xb, h.b.Cc, h.b.ab, h.b.Za] },
        { id: "batarian-soldier", name: a.ge, V: a.Ck, d: "MP_Batarian.png", health: 750, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 190, 
        heavy_melee_base_dmg: 1E3, heavy_melee_modifiers: l, powers: [h.b.fe, h.b.tc, h.b.td, h.b.Id, h.b.ac] },
        { id: "vorcha-soldier", name: a.Cf, V: a.nC, d: "MP_Vorcha.png", health: 750, shield: 250, base_encumbrance: .3, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.uc, h.b.Bc, h.b.Xb, h.b.gf, h.b.bc] },
        { id: "n7-destroyer", name: a.Ys, d: "MP_AllianceSOL.png", health: 500, shield: 1E3, base_encumbrance: .3, light_melee_base_dmg: 450, 
        heavy_melee_base_dmg: 500, Ra: 6, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.ue, h.b.Ke, h.b.Te, h.b.ev, h.b.Fo] },
        { id: "turian-havoc", name: a.sA, d: "MP_TurianSLD.png", health: 500, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Je, h.b.Rd, h.b.Zb, h.b.bf, h.b.De] },
        { id: "geth-trooper", name: a.rp, d: "MP_GethSLD.png", health: 250, shield: 1E3, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 375, Ra: 5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, race: qa.Tb.Ua, powers: [h.b.Bc, h.b.ld, h.b.Hc, h.b.df, h.b.Ce] },
        { id: "quarian-marksman", name: a.Xu, d: "MP_QuarianMSLD.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.yd, h.b.Sc, h.b.Nc, h.b.jv, h.b.bc] },
        { id: "geth-juggernaut", name: a.Lg, d: "MP_GethPSLD.png", health: 1E3, shield: 2E3, base_encumbrance: .75, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 60, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 2, shield: 2 }, race: qa.Tb.Ua, powers: [h.b.Le, h.b.rf, h.b.od, h.b.av, h.b.Do] }
    ], [   
        { id: "male-engineer", name: a.dc, V: a.rq, d: "EngineerHumanMale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.vc, h.b.tb, h.b.Rb, h.b.ab, h.b.Za] },
        { id: "female-engineer", name: a.cc, V: a.lq, d: "EngineerHumanFemale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.vc, h.b.tb, h.b.Rb, h.b.ab, h.b.Za] },
        { id: "quarian-enginner", name: a.Ze, V: a.Tu, d: "MP_Quarian0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Md, h.b.tb, h.b.Zb, h.b.Ah, h.b.Ga] },
        { id: "salarian-enginner", name: a.mf, V: a.pw, d: "MP_Salarian0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Ac, h.b.jd, h.b.tb, h.b.Ch, h.b.Ga] },
        { id: "geth-enginner", name: a.Ua, V: a.dp, d: "MP_GethEngineer.png", health: 250, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 375, Ra: 5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, race: qa.Tb.Ua, powers: [h.b.od, h.b.Hc, h.b.Rb, h.b.df, h.b.Ce] },
        { id: "quarian-male-enginner", name: a.yh, V: a.Vu, d: "MP_QuarianMale0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Sc, h.b.tb, h.b.Of, h.b.Bh, h.b.bc] },
        { id: "n7-demolisher", name: a.oh, d: "MP_AllianceENG.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 300, 
        heavy_melee_base_dmg: 550, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.tf, h.b.uj, h.b.Gc, h.b.dv, h.b.Ga] },
        { id: "volus-enginner", name: a.Bf, V: a.cC, d: "MP_VolusENG.png", health: 150, shield: 500, base_encumbrance: .15, light_melee_base_dmg: 0, 
        heavy_melee_base_dmg: 150, heavy_melee_modifiers: l, powers: [h.b.Kd, h.b.lc, h.b.Eb, h.b.Jd, h.b.Ga] },
        { id: "turian-saboteur", name: a.tA, d: "MP_TurianENG.png", health: 500, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Md, h.b.Nc, h.b.Gc, h.b.bf, h.b.De] },
        { id: "vorcha-hunter", name: a.iC, d: "MP_VorchaENG.png", health: 750, shield: 250, base_encumbrance: .4, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Sd, h.b.tb, h.b.uc, h.b.gf, h.b.bc] },
        { id: "talon-merc", name: a.bA, d: "MP_MercENG.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 100, 
        heavy_melee_base_dmg: 100, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, arrows: 3, powers: [h.b.le, h.b.me, h.b.ae, h.b.$u, h.b.Io], mutually_exclusive: [1, 2] }
    ], [
        { id: "male-sentinel", name: a.dc, V: a.tq, d: "SentinelHumanMale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Gb, h.b.fb, h.b.nc, h.b.ab, h.b.Za] },
        { id: "female-sentinel", name: a.cc, V: a.nq, d: "SentinelHumanFemale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Gb, h.b.fb, h.b.nc, h.b.ab, h.b.Za] },
        { id: "turian-sentinel", name: a.vf, V: a.uA, d: "MP_Turian0.png", health: 500, shield: 750, base_encumbrance: .5, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 675, heavy_melee_modifiers: l, powers: [h.b.Gb, h.b.fb, h.b.Rb, h.b.ff, h.b.ac] },
        { id: "krogan-sentinel", name: a.vd, V: a.cr, d: "MP_Krogan0.png", health: 750, shield: 1E3, base_encumbrance: .6, light_melee_base_dmg: 300, 
        heavy_melee_base_dmg: 700, heavy_melee_modifiers: l, powers: [h.b.Gb, h.b.tb, h.b.wd, h.b.ef, h.b.kd] },
        { id: "batarian-sentinel", name: a.ge, V: a.Ak, d: "MP_Batarian.png", health: 750, shield: 750, base_encumbrance: .45, light_melee_base_dmg: 190, 
        heavy_melee_base_dmg: 1E3, heavy_melee_modifiers: l, powers: [h.b.tc, h.b.Fb, h.b.Sd, h.b.Id, h.b.ac] },
        { id: "vorcha-sentinel", name: a.Cf, V: a.mC, d: "MP_Vorcha.png", health: 750, shield: 250, base_encumbrance: .3, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.uc, h.b.Bc, h.b.Yb, h.b.gf, h.b.bc] },
        { id: "n7-paladin", name: a.qh, d: "MP_AllianceSEN.png", health: 500, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 400, light_melee_modifiers: { health: 2, armor: 1.75, barrier: 2, shield: 2 }, 
        heavy_melee_base_dmg: 400, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, powers: [h.b.Ac, h.b.tb, h.b.Qd, h.b.gv, h.b.Go] },
        { id: "volus-merc", name: a.dC, d: "MP_VolusENG2.png", health: 150, shield: 500, base_encumbrance: .15, light_melee_base_dmg: 0, 
        heavy_melee_base_dmg: 150, heavy_melee_modifiers: l, powers: [h.b.jd, h.b.vc, h.b.Eb, h.b.Jd, h.b.Ga] },
        { id: "asari-valkyrie", name: a.Rj, d: "MP_AsariSEN.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Gb, h.b.fb, h.b.bd, h.b.Hd, h.b.Ga] },
        { id: "krogan-warlord", name: a.kh, d: "MP_BloodSEN.png", health: 1E3, barrier: 1250, base_encumbrance: .4, light_melee_base_dmg: 360, 
        heavy_melee_base_dmg: 675, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, powers: [h.b.Gb, h.b.ie, h.b.ze, h.b.cv, h.b.Eo], mutually_exclusive: [1, 2] }
    ], [ 
        { id: "male-infiltrator", name: a.dc, V: a.sq, d: "InfiltratorHumanMale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.Zb, h.b.Rc, h.b.ab, h.b.Za] },
        { id: "female-infiltrator", name: a.cc, V: a.mq, d: "InfiltratorHumanFemale.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.Zb, h.b.Rc, h.b.ab, h.b.Za] },
        { id: "salarian-inf", name: a.mf, V: a.qw, d: "MP_Salarian0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.lc, h.b.Ac, h.b.Ch, h.b.Ga] },
        { id: "quarian-inf", name: a.Ze, V: a.Uu, d: "MP_Quarian0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.Rc, h.b.Nc, h.b.Ah, h.b.Ga] },
        { id: "geth-inf", name: a.Ua, V: a.ep, d: "MP_GethInfiltrator.png", health: 250, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 375, Ra: 5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, race: qa.Tb.Ua, powers: [h.b.bb, h.b.lc, h.b.Hc, h.b.df, h.b.Ce] },
        { id: "quarian-male-inf", name: a.yh, V: a.Wu, d: "MP_QuarianMale0.png", health: 500, shield: 600, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.Sc, h.b.Of, h.b.Bh, h.b.bc] },
        { id: "n7-shadow", name: a.rh, d: "MP_AllianceINF.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 700, Ra: 2, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, powers: [h.b.bb, h.b.xe, h.b.of, h.b.hv, h.b.Ho] },
        { id: "turian-ghost", name: a.rA, d: "MP_TurianINF.png", health: 500, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 200, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.Tz, h.b.Rd, h.b.Rb, h.b.bf, h.b.De] },
        { id: "drell-assassin", name: a.we, d: "MP_DrellINF.png", health: 500, shield: 250, base_encumbrance: .6, light_melee_base_dmg: 225, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.Gc, h.b.Kd, h.b.cf, h.b.Be] },
        { id: "asari-huntress", name: a.Oj, d: "MP_AsariINF.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.Uz, h.b.yc, h.b.fb, h.b.Hd, h.b.Ga] },
        { id: "alliance-inf", name: a.ij, d: "MP_FBotINF.png", health: 500, shield: 750, base_encumbrance: .3, light_melee_base_dmg: 350, 
        heavy_melee_base_dmg: 650, heavy_melee_modifiers: l, powers: [h.b.Sz, h.b.Qd, h.b.kf, h.b.kv, h.b.Co] },
        { id: "bf3-infiltrator", name: a.Dk, V: a.bf3infiname, d: "MP_FBotINF.png", health: 500, shield: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.bb, h.b.tb, h.b.Rc, h.b.ab, h.b.Za] }
    ], [
        { id: "male-vanguard", name: a.dc, V: a.vq, d: "VanguardHumanMale.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, heavy_melee_modifiers: l, powers: [h.b.lb, h.b.Fb, h.b.Bd, h.b.ab, h.b.Za] },
        { id: "female-vanguard", name: a.cc, V: a.pq, d: "VanguardHumanFemale.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, heavy_melee_modifiers: l, powers: [h.b.lb, h.b.Fb, h.b.Bd, h.b.ab, h.b.Za] },
        { id: "drell-vanguard", name: a.ve, V: a.sn, d: "MP_Drell0.png", health: 500, barrier: 250, base_encumbrance: .6, light_melee_base_dmg: 225, 
        heavy_melee_base_dmg: 600, heavy_melee_modifiers: l, powers: [h.b.lb, h.b.Mc, h.b.Yb, h.b.cf, h.b.Be] },
        { id: "asari-vanguard", name: a.be, V: a.Sj, d: "MP_Asari0.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 150, 
        heavy_melee_base_dmg: 500, Ra: 4.5, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.lb, h.b.Qc, h.b.wd, h.b.Hd, h.b.Ga] },
        { id: "krogan-battlemaster", name: a.vd, V: a.br, d: "MP_KroganBM.png", health: 1E3, barrier: 1E3, base_encumbrance: .5, light_melee_base_dmg: 300, 
        heavy_melee_base_dmg: 700, heavy_melee_modifiers: l, powers: [h.b.Kk, h.b.Xb, h.b.rb, h.b.bv, h.b.kd] },
        { id: "cerberus-vanguard", name: a.xg, V: a.ao, d: "MP_Cerberus.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 400, 
        heavy_melee_base_dmg: 350, Ra: 6, heavy_melee_modifiers: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 }, powers: [h.b.lb, h.b.Pd, h.b.hc, h.b.zh, h.b.Ga] },
        { id: "n7-slayer", name: a.sh, d: "MP_AllianceVAN.png", health: 500, barrier: 500, base_encumbrance: .3, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 700, Ra: 2.5, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, powers: [h.b.lb, h.b.We, h.b.je, h.b.iv, h.b.Ga] },
        { id: "volus-protector", name: a.eC, d: "MP_VolusVAN.png", health: 150, barrier: 500, base_encumbrance: .15, light_melee_base_dmg: 0, 
        heavy_melee_base_dmg: 150, heavy_melee_modifiers: l, powers: [h.b.lb, h.b.Eb, h.b.ed, h.b.Jd, h.b.Ga] },
        { id: "batarian-brawler", name: a.sk, d: "MP_BatarianVAN.png", health: 750, barrier: 750, base_encumbrance: .3, light_melee_base_dmg: 190, 
        heavy_melee_base_dmg: 1E3, heavy_melee_modifiers: l, powers: [h.b.lb, h.b.hc, h.b.tc, h.b.Id, h.b.ac] },
        { id: "turian-cabal", name: a.Bl, V: a.qA, d: "MP_TurianVAN.png", health: 500, barrier: 750, base_encumbrance: .3, light_melee_base_dmg: 250, 
        heavy_melee_base_dmg: 700, heavy_melee_modifiers: { health: 1, armor: 1, barrier: 1, shield: 1 }, powers: [h.b.Ye, h.b.Ue, h.b.he, h.b.ff, h.b.Jo] }
    ]];
    /*
     Copyright 2013
    
     @requires locale.en.js
    */
    var h = h || {}, C = h.Ya = h.Ya || {}; C.mh = 4; C.rarity = { common: 0, uncommon: 1, rare: 2, ultrarare: 3, unobtainable: 4 };
    C.eg = [[
        { name: a.Zi, a: a.$i, d: "SpeedBonus.png",
        evolutions: [{ attributes: { movementSpeed: .05 } }, { attributes: { movementSpeed: .15 } }, { attributes: { movementSpeed: .25 } }] },
        { name: a.um, a: a.vm, d: "ShieldBonus.png",
        evolutions: [{ attributes: { shieldStrength: .3 } }, { attributes: { shieldStrength: .6 } }, { attributes: { shieldStrength: 1 } }, { attributes: { shieldStrength: 1.5 } }] },
        { name: a.Au, a: a.Bu, d: "PowerBonusDamage.png",
        evolutions: [{ attributes: { globalPowerDamage: .1 } }, { attributes: { globalPowerDamage: .2 } }, { attributes: { globalPowerDamage: .3 } }, { attributes: { globalPowerDamage: .5 } }] },
        { name: a.Du, a: a.Eu, d: "PowerBonus.png",
        evolutions: [{ attributes: { globalRecharge: .1 } }, { attributes: { globalRecharge: .2 } }, { attributes: { globalRecharge: .3 } }] },
        { name: a.mx, a: a.nx, d: "ShieldRegenBonus.png",
        evolutions: [{ attributes: { shieldRechargeRate: .1, ATTR_INT: 1 } }, { attributes: { shieldRechargeRate: .2, ATTR_INT: 2 } }, { attributes: { shieldRechargeRate: .3, ATTR_INT: 3 } }] },
        { name: a.Ry, a: a.Sy, d: "StabilityBonus.png",
        evolutions: [{ attributes: { stability: .1, ATTR_INT: 1 } }, { attributes: { stability: .2, ATTR_INT: 2 } }, { attributes: { stability: .3, ATTR_INT: 3 } }] }
    ], [
        { name: a.Vi, a: a.Wi, f: C.rarity.uncommon, d: "Gear_BioticDamage.png",
        evolutions: [{ attributes: { bioticDamage: .05 } }, { attributes: { bioticDamage: .075 } }, { attributes: { bioticDamage: .1 } }, { attributes: { bioticDamage: .125 } }, { attributes: { bioticDamage: .15 } }] },
        { name: a.bk, a: a.ck, f: C.rarity.uncommon, d: "Gear_WeaponDamage_AssaultRifle.png",
        evolutions: [{ attributes: { weaponDamageAssault: .05 } }, { attributes: { weaponDamageAssault: .075 } }, { attributes: { weaponDamageAssault: .1 } }, { attributes: { weaponDamageAssault: .125 } }, { attributes: { weaponDamageAssault: .15 } }] }, 
        { name: a.Ym, a: a.Zm, f: C.rarity.uncommon, d: "Gear_WeaponDamage_All.png",
        evolutions: [{ attributes: { weaponDamage: .03 } }, { attributes: { weaponDamage: .05 } }, { attributes: { weaponDamage: .07 } }, { attributes: { weaponDamage: .085 } }, { attributes: { weaponDamage: .1 } }] },
        { name: a.Un, a: a.Vn, f: C.rarity.uncommon, d: "Gear_TechDamage.png",
        evolutions: [{ attributes: { techDamage: .05 } }, { attributes: { techDamage: .075 } }, { attributes: { techDamage: .1 } }, { attributes: { techDamage: .125 } }, { attributes: { techDamage: .15 } }] }, 
        { name: a.Cq, a: a.Dq, f: C.rarity.uncommon, d: "Gear_MeleeDamage.png",
        evolutions: [{ attributes: { meleeDamage: .1 } }, { attributes: { meleeDamage: .125 } }, { attributes: { meleeDamage: .15 } }, { attributes: { meleeDamage: .175 } }, { attributes: { meleeDamage: .2 } }] },
        { name: a.Is, a: a.Js, f: C.rarity.uncommon, d: "Gear_PowerBonus_Damage.png",
        evolutions: [{ attributes: { globalPowerDamage: .04 } }, { attributes: { globalPowerDamage: .06 } }, { attributes: { globalPowerDamage: .08 } }, { attributes: { globalPowerDamage: .1 } }, { attributes: { globalPowerDamage: .12 } }] }, 
        { name: a.Rs, a: a.Ss, f: C.rarity.uncommon, d: "Gear_ShieldRegen.png",
        evolutions: [{ attributes: { shieldRechargeRate: .05 } }, { attributes: { shieldRechargeRate: .075 } }, { attributes: { shieldRechargeRate: .1 } }, { attributes: { shieldRechargeRate: .125 } }, { attributes: { shieldRechargeRate: .15 } }] },
        { name: a.$t, a: a.au, f: C.rarity.uncommon, d: "Gear_WeaponDamage_Pistol.png",
        evolutions: [{ attributes: { weaponDamagePistol: .05 } }, { attributes: { weaponDamagePistol: .075 } }, { attributes: { weaponDamagePistol: .1 } }, { attributes: { weaponDamagePistol: .125 } }, { attributes: { weaponDamagePistol: .15 } }] },
        { name: a.bx, a: a.cx, f: C.rarity.uncommon, d: "Gear_ShieldStrength.png",
        evolutions: [{ attributes: { shieldStrength: .1 } }, { attributes: { shieldStrength: .15 } }, { attributes: { shieldStrength: .2 } }, { attributes: { shieldStrength: .25 } }, { attributes: { shieldStrength: .3 } }] },
        { name: a.Bx, a: a.Cx, f: C.rarity.uncommon, d: "Gear_WeaponDamage_Shotgun.png",
        evolutions: [{ attributes: { weaponDamageShotgun: .05 } }, { attributes: { weaponDamageShotgun: .075 } }, { attributes: { weaponDamageShotgun: .1 } }, { attributes: { weaponDamageShotgun: .125 } }, { attributes: { weaponDamageShotgun: .15 } }] },
        { name: a.Qv, a: a.Rv, f: C.rarity.uncommon, d: "Gear_WeaponDamage_SMG.png",
        evolutions: [{ attributes: { weaponDamageSMG: .05 } }, { attributes: { weaponDamageSMG: .075 } }, { attributes: { weaponDamageSMG: .1 } }, { attributes: { weaponDamageSMG: .125 } }, { attributes: { weaponDamageSMG: .15 } }] }, 
        { name: a.sy, a: a.ty, f: C.rarity.uncommon, d: "Gear_WeaponDamage_SniperRifle.png",
        evolutions: [{ attributes: { weaponDamageSniper: .05 } }, { attributes: { weaponDamageSniper: .075 } }, { attributes: { weaponDamageSniper: .1 } }, { attributes: { weaponDamageSniper: .125 } }, { attributes: { weaponDamageSniper: .15 } }] },
        { name: a.kz, a: a.lz, f: C.rarity.uncommon, d: "Gear_PowerBonus_Cooldown.png",
        evolutions: [{ attributes: { globalRecharge: .05 } }, { attributes: { globalRecharge: .075 } }, { attributes: { globalRecharge: .1 } }, { attributes: { globalRecharge: .125 } }, { attributes: { globalRecharge: .15 } }] }, 
        { name: a.lA, a: a.mA, f: C.rarity.uncommon, d: "Gear_AmmoCapacity.png",
        evolutions: [{ attributes: { ammoCapacity: 0 } }, { attributes: { ammoCapacity: 0 } }, { attributes: { ammoCapacity: 0 } }, { attributes: { ammoCapacity: 0 } }, { attributes: { ammoCapacity: .3 } }] },
        { name: a.pC, a: a.qC, f: C.rarity.uncommon, d: "Gear_HeadshotDamage.png",
        evolutions: [{ attributes: { headshot: .08 } }, { attributes: { headshot: .11 } }, { attributes: { headshot: .14 } }, { attributes: { headshot: .17 } }, { attributes: { headshot: .2 } }] }, 
        { name: a.Hj, a: a.Ij, f: C.rarity.rare, d: "Gear_CobraCapacity.png",
        evolutions: [{ attributes: { cobraCapacity: 1, ammoCapacity: .05 } }, { attributes: { cobraCapacity: 1, ammoCapacity: .075 } }, { attributes: { cobraCapacity: 2, ammoCapacity: .1 } }, { attributes: { cobraCapacity: 2, ammoCapacity: .125 } }, { attributes: { cobraCapacity: 3, ammoCapacity: .15 } }] },
        { name: a.$j, a: a.ak, f: C.rarity.rare, d: "Gear_ThermalCapacity.png",
        evolutions: [{ attributes: { thermalCapacity: 1, weaponDamage: .02 } }, { attributes: { thermalCapacity: 1, weaponDamage: .04 } }, { attributes: { thermalCapacity: 2, weaponDamage: .06 } }, { attributes: { thermalCapacity: 2, weaponDamage: .07 } }, { attributes: { thermalCapacity: 3, weaponDamage: .08 } }] }, 
        { name: a.mk, a: a.nk, f: C.rarity.rare, d: "Gear_Combo_WeaponStabilityAmmoCapacity.png",
        evolutions: [{ attributes: { ammoCapacity: .05, stability: .1 } }, { attributes: { ammoCapacity: .075, stability: .15 } }, { attributes: { ammoCapacity: .1, stability: .2 } }, { attributes: { ammoCapacity: .125, stability: .25 } }, { attributes: { ammoCapacity: .15, stability: .3 } }] },
        { name: a.yk, a: a.zk, f: C.rarity.rare, d: "Gear_BatarianGauntlet.png",
        evolutions: [{ attributes: { meleeHeavyBase: 600 } }, { attributes: { meleeHeavyBase: 650 } }, { attributes: { meleeHeavyBase: 700 } }, { attributes: { meleeHeavyBase: 750 } }, { attributes: { meleeHeavyBase: 800 } }] },
        { name: a.Gk, a: a.Hk, f: C.rarity.rare, d: "Gear_Combo_ShotgunDamageMeleeDamage.png",
        evolutions: [{ attributes: { meleeDamage: .04, weaponDamageShotgun: .04 } }, { attributes: { meleeDamage: .06, weaponDamageShotgun: .06 } }, { attributes: { meleeDamage: .08, weaponDamageShotgun: .08 } }, { attributes: { meleeDamage: .1, weaponDamageShotgun: .1 } }, { attributes: { meleeDamage: .12, weaponDamageShotgun: .12 } }] }, 
        { name: a.am, a: a.bm, f: C.rarity.rare, d: "Gear_Combo_AssaultRifleDamagePistolDamage.png",
        evolutions: [{ attributes: { weaponDamageAssault: .04, weaponDamagePistol: .04 } }, { attributes: { weaponDamageAssault: .06, weaponDamagePistol: .06 } }, { attributes: { weaponDamageAssault: .08, weaponDamagePistol: .08 } }, { attributes: { weaponDamageAssault: .1, weaponDamagePistol: .1 } }, { attributes: { weaponDamageAssault: .12, weaponDamagePistol: .12 } }] }, 
        { name: a.cm, a: a.dm, f: C.rarity.rare, d: "Gear_Combo_PistolDamageBioticDamage.png",
        evolutions: [{ attributes: { weaponDamagePistol: .04, bioticDamage: .04 } }, { attributes: { weaponDamagePistol: .06, bioticDamage: .06 } }, { attributes: { weaponDamagePistol: .08, bioticDamage: .08 } }, { attributes: { weaponDamagePistol: .1, bioticDamage: .1 } }, { attributes: { weaponDamagePistol: .12, bioticDamage: .12 } }] },
        { name: a.eo, a: a.fo, f: C.rarity.rare, d: "Gear_Combo_SMGDamagePowerCooldown.png",
        evolutions: [{ attributes: { weaponDamageSMG: .04, globalRecharge: .04 } }, { attributes: { weaponDamageSMG: .06, globalRecharge: .06 } }, { attributes: { weaponDamageSMG: .08, globalRecharge: .08 } }, { attributes: { weaponDamageSMG: .1, globalRecharge: .1 } }, { attributes: { weaponDamageSMG: .12, globalRecharge: .12 } }] }, 
        { name: a.np, a: a.op, f: C.rarity.rare, d: "Gear_VisionHelmet.png",
        evolutions: [{ attributes: { radius: 10 } }, { attributes: { radius: 12.5 } }, { attributes: { radius: 15 } }, { attributes: { radius: 17.5 } }, { attributes: { radius: 20 } }] },
        { name: a.sb, a: a.Bp, f: C.rarity.rare, d: "Gear_GrenadeCapacity.png",
        evolutions: [{ attributes: { grenadeCapacity: 1 } }, { attributes: { grenadeCapacity: 2 } }, { attributes: { grenadeCapacity: 3 } }, { attributes: { grenadeCapacity: 4 } }, { attributes: { grenadeCapacity: 5 } }] }, 
        { name: a.Ep, a: a.Fp, f: C.rarity.rare, d: "Gear_Combo_SniperDamageSMGDamage.png",
        evolutions: [{ attributes: { weaponDamageSMG: .04, weaponDamageSniper: .04 } }, { attributes: { weaponDamageSMG: .06, weaponDamageSniper: .06 } }, { attributes: { weaponDamageSMG: .08, weaponDamageSniper: .08 } }, { attributes: { weaponDamageSMG: .1, weaponDamageSniper: .1 } }, { attributes: { weaponDamageSMG: .12, weaponDamageSniper: .12 } }] },
        { name: a.Vq, a: a.Wq, f: C.rarity.rare, d: "Gear_Combo_ShieldStrengthMeleeDamage.png",
        evolutions: [{ attributes: { meleeDamage: .04, shieldStrength: .06 } }, { attributes: { meleeDamage: .06, shieldStrength: .1 } }, { attributes: { meleeDamage: .08, shieldStrength: .14 } }, { attributes: { meleeDamage: .1, shieldStrength: .17 } }, { attributes: { meleeDamage: .12, shieldStrength: .2 } }] }, 
        { name: a.Cs, a: a.Ds, f: C.rarity.rare, d: "Gear_Combo_MeleeDamageBioticDamage.png",
        evolutions: [{ attributes: { bioticDamage: .04, meleeDamage: .04 } }, { attributes: { bioticDamage: .06, meleeDamage: .06 } }, { attributes: { bioticDamage: .08, meleeDamage: .08 } }, { attributes: { bioticDamage: .1, meleeDamage: .1 } }, { attributes: { bioticDamage: .12, meleeDamage: .12 } }] },
        { name: a.Es, a: a.Fs, f: C.rarity.rare, d: "Gear_MassMedigel.png",
        evolutions: [{ attributes: { radius: 10 } }, { attributes: { radius: 15 } }, { attributes: { radius: 20 } }, { attributes: { radius: 25 } }, { attributes: { radius: 30 } }] }, 
        { name: a.Ct, a: a.Dt, f: C.rarity.rare, d: "Gear_Combo_TechDamagePowerCooldown.png",
        evolutions: [{ attributes: { globalRecharge: .04, techDamage: .04 } }, { attributes: { globalRecharge: .06, techDamage: .06 } }, { attributes: { globalRecharge: .08, techDamage: .08 } }, { attributes: { globalRecharge: .1, techDamage: .1 } }, { attributes: { globalRecharge: .12, techDamage: .12 } }] },
        { name: a.Ft, a: a.Gt, f: C.rarity.rare, d: "Gear_Combo_SniperDamageTechDamage.png",
        evolutions: [{ attributes: { techDamage: .04, weaponDamageSniper: .04 } }, { attributes: { techDamage: .06, weaponDamageSniper: .06 } }, { attributes: { techDamage: .08, weaponDamageSniper: .08 } }, { attributes: { techDamage: .1, weaponDamageSniper: .1 } }, { attributes: { techDamage: .12, weaponDamageSniper: .12 } }] },
        { name: a.Lv, a: a.Mv, f: C.rarity.rare, d: "Gear_MedigelCapacity.png",
        evolutions: [{ attributes: { medigelCapacity: 1, shieldRechargeRate: .04 } }, { attributes: { medigelCapacity: 1, shieldRechargeRate: .06 } }, { attributes: { medigelCapacity: 2, shieldRechargeRate: .08 } }, { attributes: { medigelCapacity: 2, shieldRechargeRate: .1 } }, { attributes: { medigelCapacity: 3, shieldRechargeRate: .12 } }] }, 
        { name: a.wx, a: a.xx, f: C.rarity.rare, d: "Gear_Combo_ShotgunDamageGrenadeCap.png",
        evolutions: [{ attributes: { grenadeCapacity: 1, weaponDamageShotgun: .04 } }, { attributes: { grenadeCapacity: 1, weaponDamageShotgun: .06 } }, { attributes: { grenadeCapacity: 1, weaponDamageShotgun: .08 } }, 
            { attributes: { grenadeCapacity: 2, weaponDamageShotgun: .1 } }, { attributes: { grenadeCapacity: 2, weaponDamageShotgun: .12 } }] }, 
        { name: a.iz, a: a.jz, f: C.rarity.rare, d: "Gear_Combo_ShieldStrengthShieldRegen.png",
        evolutions: [{ attributes: { shieldRechargeRate: .04, shieldStrength: .06 } }, { attributes: { shieldRechargeRate: .06, shieldStrength: .1 } }, { attributes: { shieldRechargeRate: .08, shieldStrength: .14 } }, 
            { attributes: { shieldRechargeRate: .1, shieldStrength: .17 } }, { attributes: { shieldRechargeRate: .12, shieldStrength: .2 } }] },
        { name: a.zz, a: a.Az, f: C.rarity.rare, d: "Gear_SurvivalCapacity.png",
        evolutions: [{ attributes: { opsPackCapacity: 1, shieldStrength: .06 } }, { attributes: { opsPackCapacity: 1, shieldStrength: .1 } }, { attributes: { opsPackCapacity: 2, shieldStrength: .14 } }, 
            { attributes: { opsPackCapacity: 2, shieldStrength: .17 } }, { attributes: { opsPackCapacity: 3, shieldStrength: .2 } }] }, 
        { name: a.sC, a: a.tC, f: C.rarity.rare, d: "Gear_Combo_AssaultDamageGrenadeCap.png",
        evolutions: [{ attributes: { grenadeCapacity: 1, weaponDamageAssault: .04 } }, { attributes: { grenadeCapacity: 1, weaponDamageAssault: .06 } }, { attributes: { grenadeCapacity: 1, weaponDamageAssault: .08 } }, 
            { attributes: { grenadeCapacity: 2, weaponDamageAssault: .1 } }, { attributes: { grenadeCapacity: 2, weaponDamageAssault: .12 } }] },
        { name: "Vibration Damper", a: a.vibration_damper_desc, f: C.rarity.unobtainable, d: "Gear_WeaponStability.png",
        evolutions: [{ attributes: { stability: .15 }}, { attributes: { stability: .22 }}, { attributes: { stability: .28 }}, { attributes: { stability: .34 }}, { attributes: { stability: .40 }}] }
    ], [
        { name: a.ek, a: a.fk, d: "WeaponDamageBonus_AssaultRifle.png",
        evolutions: [{ attributes: { weaponDamageAssault: .1 } }, { attributes: { weaponDamageAssault: .2 } }, { attributes: { weaponDamageAssault: .3 } }] }, 
        { name: a.pu, a: a.qu, d: "WeaponDamageBonus_Pistol.png",
        evolutions: [{ attributes: { weaponDamagePistol: .1 } }, { attributes: { weaponDamagePistol: .2 } }, { attributes: { weaponDamagePistol: .3 } }] },
        { name: a.Mx, a: a.Nx, d: "WeaponDamageBonus_Shotgun.png",
        evolutions: [{ attributes: { weaponDamageShotgun: .1 } }, { attributes: { weaponDamageShotgun: .2 } }, { attributes: { weaponDamageShotgun: .3 } }] },
        { name: a.bw, a: a.cw, d: "WeaponDamageBonus_SMG.png",
        evolutions: [{ attributes: { weaponDamageSMG: .1 } }, { attributes: { weaponDamageSMG: .2 } }, { attributes: { weaponDamageSMG: .3 } }] },
        { name: a.Cy, a: a.Dy, d: "WeaponDamageBonus_SniperRifle.png",
        evolutions: [{ attributes: { weaponDamageSniper: .1 } }, { attributes: { weaponDamageSniper: .2 } }, { attributes: { weaponDamageSniper: .3 } }] },
        { name: a.ez, a: a.fz, d: "MeleeDamage.png",
        evolutions: [{ attributes: { meleeDamage: .1, ATTR_INT: 1 } }, { attributes: { meleeDamage: .2, ATTR_INT: 2 } }, { attributes: { meleeDamage: .3, ATTR_INT: 3 } }] },
        { name: a.cA, a: a.dA, d: "HeadshotDamage.png",
        evolutions: [{ attributes: { headshot: .15, ATTR_INT: 1 } }, { attributes: { headshot: .25, ATTR_INT: 2 } }, { attributes: { headshot: .35, ATTR_INT: 3 } }] }
    ], [
        { name: a.Fj, a: a.Gj, d: "AmmoPower_ArmorPiercing.png",
        evolutions: [{ attributes: { ammoDamage: .1, penetration: .5, enemyArmorPenetration: .5 } }, { attributes: { ammoDamage: .2, penetration: .75, enemyArmorPenetration: .65 } }, { attributes: { ammoDamage: .3, penetration: 1, enemyArmorPenetration: .75 } }, { attributes: { ammoDamage: .5, penetration: 1.5, enemyArmorPenetration: .9 } }], i: { health: 1, armor: 1, barrier: 0, shield: 0 } }, 
        { name: a.rm, a: a.sm, d: "AmmoPower_Cryo.png",
        evolutions: [{ attributes: { enemyMovementSpeed: .15, ammoArmorWeakening: .25, AMMO_TIME: 3, AMMO_INT: 1 } }, { attributes: { enemyMovementSpeed: .25, ammoArmorWeakening: .35, AMMO_TIME: 4, AMMO_INT: 1.4 } }, { attributes: { enemyMovementSpeed: .35, ammoArmorWeakening: .5, AMMO_TIME: 5, AMMO_INT: 1.8 } }, { attributes: { enemyMovementSpeed: .35, ammoArmorWeakening: .65, AMMO_TIME: 5.5, AMMO_INT: 2.2 } }], i: { health: 0, armor: 0, barrier: 0, shield: 0 } },
        { name: a.ln, a: a.mn, d: "AmmoPower_Disruptor.png",
        evolutions: [{ attributes: { ammoDamage: .05, AMMO_INT: 1, AMMO_TIME: 3.5, ATTR_PCT: 1, ATTR_TIME: 8 } }, { attributes: { ammoDamage: .1, AMMO_INT: 1.4, AMMO_TIME: 3.5, ATTR_PCT: 1, ATTR_TIME: 8 } }, { attributes: { ammoDamage: .15, AMMO_INT: 1.8, AMMO_TIME: 3.5, ATTR_PCT: 1, ATTR_TIME: 8 } }, { attributes: { ammoDamage: .25, AMMO_INT: 2, AMMO_TIME: 5, ATTR_PCT: 1, ATTR_TIME: 8 } }], i: { health: 1, armor: 1, barrier: 4, shield: 4 } }, 
        { name: a.tn, a: a.un, d: "AmmoPower_Eraser.png",
        evolutions: [{ attributes: { ammoDamage: .1, penetration: 1, enemyArmorPenetration: .1 } }, { attributes: { ammoDamage: .2, penetration: 1.5, enemyArmorPenetration: .25 } }, { attributes: { ammoDamage: .3, penetration: 2.5, enemyArmorPenetration: .4 } }], i: { health: 1, armor: 1, barrier: 0, shield: 0 } }, 
        { name: a.mo, a: a.no, d: "AmmoPower_Needler.png",
        evolutions: [{ attributes: { AMMO_INT: 50, ammoDamage: .1, radius: 1.5 }, Zc: 50 }, { attributes: { AMMO_INT: 150, ammoDamage: .2, radius: 2 }, Zc: 150 }, { attributes: { AMMO_INT: 250, ammoDamage: .3, radius: 2.5 }, Zc: 250 }], i: { health: 1, armor: 1, barrier: 1, shield: 1 } },
        { name: a.Fq, a: a.Gq, d: "AmmoPower_Incendiary.png",
        evolutions: [{ attributes: { ammoDamage: .1, ATTR_INT: 10, ATTR_TIME: 3 } }, { attributes: { ammoDamage: .2, ATTR_INT: 20, ATTR_TIME: 3 } }, 
            { attributes: { ammoDamage: .3, ATTR_INT: 30, ATTR_TIME: 3 } }, { attributes: { ammoDamage: .5, ATTR_INT: 50, ATTR_TIME: 3 } }], 
            i: { health: 1, armor: 1, barrier: 0, shield: 0 } }, 
        { name: a.Wt, a: a.Xt, d: "AmmoPower_Phasic.png",
        evolutions: [{ attributes: { ammoDamage: .05, ATTR_PCT: 1, ATTR_TIME: 15 } }, { attributes: { ammoDamage: .1, ATTR_PCT: 1, ATTR_TIME: 15 } }, 
            { attributes: { ammoDamage: .15, ATTR_PCT: 1, ATTR_TIME: 15 } }], i: { health: 1, armor: 0, barrier: 10, shield: 10 } },
        { name: a.AC, a: a.BC, d: "AmmoPower_Warp.png",
        evolutions: [{ attributes: { ammoDamage: .15, ATTR_PCT: .25, ammoArmorWeakening: .25, ATTR_TIME: 4 } }, { attributes: { ammoDamage: .25, ATTR_PCT: .5, ammoArmorWeakening: .35, ATTR_TIME: 4 } }, 
            { attributes: { ammoDamage: .35, ATTR_PCT: .75, ammoArmorWeakening: .5, ATTR_TIME: 4 } }, { attributes: { ammoDamage: .6, ATTR_PCT: 1, ammoArmorWeakening: .65, ATTR_TIME: 4 } }], 
            i: { health: 1, armor: 1, barrier: 2, shield: 0 } },
        { name: "Polonium Rounds", a: a.polonium_desc, d: "AmmoPower_Polonium.png",
        evolutions: [{attributes: { ammoDamage: .2, ATTR_TIME: 10}}, {attributes: { ammoDamage: .3, ATTR_TIME: 9}}, 
            {attributes: { ammoDamage: .4, ATTR_TIME: 8}}, {attributes: { ammoDamage: .45, ATTR_TIME: 5}}], 
        i: { health: 1, armor: 1, barrier: 1, shield: 1 }}
    ]];
    /*
     Copyright 2013
    
     @requires game.kits.js
     @requires locale.en.js
    */
    var h = h || {}, H = h.Ya = h.Ya || {}, ua = h.Cb.Tb, J = { organic: { health: 1, armor: 1, barrier: 1, shield: 1 } }; 
    H.I = { mc: 0, na: 1, sa: 2, yA: 3, Wd: 4, gy: 5 }; 
    H.xd = 9; 
    H.Qb = 4; 
    H.D = { assault: 0, pistol: 1, shotgun: 2, smg: 3, sniper: 4 }; 
    H.U = { eb: 0, kb: 1, dd: 2, yb: 3, ic: 4, Db: 5 };
    H.Df = [
    [
        { name: a.hs, a: a.js, ammo_capacity_L: 210, ammo_capacity_H: 262, damage_L: 38.6, damage_H: 48.2, magazine: 30, mode: H.I.sa, 
            f: H.rarity.common, i: J, d: "AssaultRifle_Avenger.png", type: H.D.assault, weight_L: 1, weight_H: .5 }, 
        { name: a.Ar, a: a.Br, ammo_capacity_L: 144, ammo_capacity_H: 180, damage_L: 68.6, damage_H: 85.8, magazine: 24, mode: H.I.Wd, 
            burst: 3, f: H.rarity.uncommon, i: J, d: "AssaultRifle_Vindicator.png", type: H.D.assault, weight_L: 1.25, weight_H: .7 }, 
        { name: a.os, a: a.ps, ammo_capacity_L: 96, ammo_capacity_H: 120, damage_L: 103.6, damage_H: 129.5, magazine: 16, mode: H.I.na, 
            f: H.rarity.uncommon, i: J, d: "AssaultRifle_Mattock.png", type: H.D.assault, weight_L: 1.5, weight_H: .9 }, 
        { name: a.Qt, a: a.Rt, ammo_capacity_L: 350, ammo_capacity_H: 450, damage_L: 41.9, damage_H: 52.4, magazine: 50, mode: H.I.sa, 
            f: H.rarity.uncommon, i: J, d: "AssaultRifle_Cobra.png", type: H.D.assault, weight_L: 1.35, weight_H: .8 }, 
        { name: a.Xi, a: a.Yi, ammo_capacity_L: 72, ammo_capacity_H: 96, damage_L: 178.1, damage_H: 222.6, magazine: 24, mode: H.I.sa, piercing_incapable: true,
            f: H.rarity.rare, i: { organic: { health: 1, armor: 1, barrier: 2, shield: 2 } }, d: "AssaultRifle_Adas_MP.png", type: H.D.assault, weight_L: 2, weight_H: 1.4, headshot_capable: !1, armor_penalty: !1, dlc: true }, 
        { name: a.Ql, a: a.Rl, ammo_capacity_L: 308, ammo_capacity_H: 392, damage_L: 55.4, damage_H: 69.2, magazine: 28, mode: H.I.sa, 
            race: ua.Sb, f: H.rarity.rare, i: J, d: "AssaultRifle_Collector.png", type: H.D.assault, weight_L: 1.6, weight_H: 1.2, dlc: true }, 
        { name: a.lp, a: a.mp, ammo_capacity_L: 480, ammo_capacity_H: 640, damage_L: 28.8, damage_H: 36, magazine: 100, mode: H.I.sa, 
            race: ua.Ua, f: H.rarity.rare, i: J, d: "AssaultRifle_Geth.png", type: H.D.assault, weight_L: 1, weight_H: .5, headshot_modifier: 3 }, 
        { name: a.Qr, a: a.Rr, ammo_capacity_L: 18, ammo_capacity_H: 28, damage_L: 279.2, damage_H: 349, magazine: 4, mode: H.I.na,  piercing_incapable: true,
            f: H.rarity.rare, i: J, d: "AssaultRifle_Falcon.png", type: H.D.assault, weight_L: 1.75, weight_H: 1, headshot_capable: !1, armor_penalty: !1 }, 
        { name: a.Wr, a: a.Xr, ammo_capacity_L: 168, ammo_capacity_H: 210, damage_L: 164.8, damage_H: 206, magazine: 21, mode: H.I.Wd, 
            burst: 3, f: H.rarity.rare, i: J, d: "AssaultRifle_Argus.png", type: H.D.assault, weight_L: 2, weight_H: 1.4 }, 
        { name: a.bs, a: a.cs, ammo_capacity_L: 360, ammo_capacity_H: 480, damage_L: 63.6, damage_H: 79.5, magazine: 60, mode: H.I.sa, 
            f: H.rarity.rare, i: J, d: "AssaultRifle_Revenant.png", type: H.D.assault, weight_L: 1.8, weight_H: 1.25 }, 
        { name: a.gz, a: a.hz, ammo_capacity_L: 60, ammo_capacity_H: 72, damage_L: 144.7, damage_H: 180.9, magazine: 12, mode: H.I.sa, piercing_incapable: true, 
            f: H.rarity.rare, i: J, d: "AssaultRifle_Krogan.png", type: H.D.assault, weight_L: 2, weight_H: 1.4, headshot_capable: !1, armor_penalty: !1, dlc: true }, 
        { name: a.Gl, a: a.Hl, ammo_capacity_L: 80, ammo_capacity_H: 100, damage_L: 106.2, damage_H: 129.5, magazine: 20, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "AssaultRifle_Cerberus.png", type: H.D.assault, weight_L: 1.75, weight_H: 1.25, dlc: true }, 
        { name: a.pp, a: a.qp, ammo_capacity_L: 600, ammo_capacity_H: 750, damage_L: 62.2, damage_H: 77.8, magazine: 220, mode: H.I.sa, 
            race: ua.Ua, f: H.rarity.ultrarare, i: { organic: { health: 1, armor: 1, barrier: 1.75, shield: 1.75 } }, d: "AssaultRifle_Spitfire.png", type: H.D.assault, weight_L: 3, weight_H: 2.5, dlc: true }, 
        { name: a.fs, a: a.gs, ammo_capacity_L: 0, ammo_capacity_H: 57, damage_L: 67.9, damage_H: 84.8, magazine: 38, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "AssaultRifle_Lancer_MP.png", type: H.D.assault, weight_L: 1.3, weight_H: .8, dlc: true }, 
        { name: a.us, a: a.vs, ammo_capacity_L: 40, ammo_capacity_H: 56, damage_L: 460, damage_H: 575, magazine: 8, mode: H.I.na, 
            f: H.rarity.ultrarare, i: J, d: "AssaultRifle_Saber.png", type: H.D.assault, weight_L: 1.7, weight_H: 1.4 }, 
        { name: a.et, a: a.ft, ammo_capacity_L: 400, ammo_capacity_H: 500, damage_L: 44.4, damage_H: 55.5, magazine: 100, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: { organic: { health: 1, armor: 1.5, barrier: 1.5, shield: 1.5 } }, d: "AssaultRifle_LMG.png", type: H.D.assault, weight_L: 2.5, weight_H: 2, native_piercing: true,
            charged: !0, charged_ammo: !0, charged_damage: 1.5, dlc: true }, 
        { name: a.it, a: a.jt, ammo_capacity_L: 144, ammo_capacity_H: 180, damage_L: 119.9, damage_H: 149.9, magazine: 16, mode: H.I.yA, 
            burst: 2, f: H.rarity.ultrarare, i: J, d: "AssaultRifle_Valkyrie.png", type: H.D.assault, weight_L: 1.5, weight_H: 1.25, headshot_modifier: 3 }, 
        { name: a.Ot, a: a.Pt, ammo_capacity_L: 0, ammo_capacity_H: 125, damage_L: 19.2, damage_H: 25.8, magazine: 100, mode: H.I.sa, 
            race: ua.Sb, f: H.rarity.ultrarare, i: J, d: "AssaultRifle_Prothean_MP.png", type: H.D.assault, weight_L: 2, weight_H: 1.4, charged: !0, charged_ammo: !0, charged_damage: 4, dlc: true },
        { name: "Chakram Launcher", a: a.chakram_desc, ammo_capacity_L: 40, ammo_capacity_H: 50, damage_L: 277.9, damage_H: 347.4, magazine: 4, mode: H.I.sa, piercing_incapable: true, 
            f: H.rarity.unobtainable, i: J, d: "AssaultRifle_Chakram.png", type: H.D.assault, weight_L: 1.75, weight_H: 1, 
            charged: 1, charged_damage: 3, charged_ammo: !0, headshot_capable: !1, armor_penalty: !1}
    ], [
        { name: a.Sr, a: a.Tr, ammo_capacity_L: 90, ammo_capacity_H: 112, damage_L: 58.8, damage_H: 73.5, magazine: 15, mode: H.I.na, 
            f: H.rarity.common, i: J, d: "Pistol_Predator.png", type: H.D.pistol, weight_L: .5, weight_H: .2 }, 
        { name: a.Yr, a: a.Zr, ammo_capacity_L: 72, ammo_capacity_H: 90, damage_L: 114.8, damage_H: 143.5, magazine: 12, mode: H.I.na, 
            f: H.rarity.uncommon, i: J, d: "Pistol_Phalanx.png", type: H.D.pistol, weight_L: .6, weight_H: .25 }, 
        { name: a.Si, a: a.Ti, ammo_capacity_L: 12, ammo_capacity_H: 24, damage_L: 420.2, damage_H: 490, magazine: 3, mode: H.I.na,  piercing_incapable: true,
            f: H.rarity.rare, i: { organic: { health: 1, armor: 1, barrier: 5, shield: 5 } }, d: "Pistol_Asari.png", type: H.D.pistol, weight_L: .5, weight_H: .2, headshot_capable: !1, armor_penalty: !1, dlc: true }, 
        { name: a.vj, a: a.wj, ammo_capacity_L: 72, ammo_capacity_H: 90, damage_L: 77.2, damage_H: 96.5, magazine: 18, mode: H.I.na, 
            f: H.rarity.rare, i: J, d: "Pistol_Thor.png", type: H.D.pistol, weight_L: 1.1, weight_H: .6, charged: !0, charged_ammo: !0, charged_damage: 3, charged_shots: 3 }, 
        { name: a.bo, a: a.co, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 784.9, damage_H: 981.1, magazine: 1, mode: H.I.mc, 
            f: H.rarity.rare, i: J, d: "Pistol_Bloodpack_MP.png", type: H.D.pistol, weight_L: 1.2, weight_H: .7, dlc: true }, 
        { name: a.sr, a: a.tr, ammo_capacity_L: 30, ammo_capacity_H: 40, damage_L: 125.7, damage_H: 157.1, magazine: 6, mode: H.I.na, 
            f: H.rarity.rare, i: J, d: "Pistol_Silencer_MP.png", type: H.D.pistol, weight_L: 1.2, weight_H: .7, headshot_modifier: 4 }, 
        { name: a.$r, a: a.as, ammo_capacity_L: 30, ammo_capacity_H: 40, damage_L: 276.1, damage_H: 345.1, magazine: 6, mode: H.I.na, 
            f: H.rarity.rare, i: J, d: "Pistol_Carnifex.png", type: H.D.pistol, weight_L: 1.2, weight_H: .7 }, 
        { name: a.Or, a: a.Pr, ammo_capacity_L: 24, ammo_capacity_H: 36, damage_L: 93.7, damage_H: 117.1, magazine: 4, mode: H.I.na, 
            burst: 6, f: H.rarity.ultrarare, i: { organic: { health: 1, armor: 1, barrier: 1.5, shield: 1.5 } }, d: "Pistol_Talon.png", type: H.D.pistol, weight_L: .9, weight_H: .6 }, 
        { name: a.ds, a: a.es, ammo_capacity_L: 21, ammo_capacity_H: 33, damage_L: 424.9, damage_H: 531.1, magazine: 3, mode: H.I.na, 
            f: H.rarity.ultrarare, i: J, d: "Pistol_Ivory.png", type: H.D.pistol, weight_L: 1, weight_H: .7, dlc: true }, 
        { name: a.Zs, a: a.$s, ammo_capacity_L: 192, ammo_capacity_H: 240, damage_L: 86.1, damage_H: 107.7, magazine: 24, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "Pistol_Eagle.png", type: H.D.pistol, weight_L: .45, weight_H: .25 }, 
        { name: a.vw, a: a.ww, ammo_capacity_L: 20, ammo_capacity_H: 30, damage_L: 375.2, damage_H: 469, magazine: 4, mode: H.I.na,  piercing_incapable: true,
            f: H.rarity.ultrarare, i: J, d: "Pistol_Scorpion.png", type: H.D.pistol, weight_L: 1.1, weight_H: .6, headshot_capable: !1, armor_penalty: !1 }
    ], [
        { name: a.Er, a: a.Fr, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 48.1, damage_H: 60.2, magazine: 5, mode: H.I.na, 
            burst: 8, f: H.rarity.common, i: J, d: "Shotgun_Katana.png", type: H.D.shotgun, weight_L: 1.5, weight_H: .9 }, 
        { name: a.Cr, a: a.Dr, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 64.6, damage_H: 80.7, magazine: 3, mode: H.I.na, 
            burst: 8, f: H.rarity.uncommon, i: J, d: "Shotgun_Eviscerator.png", type: H.D.shotgun, weight_L: 1.25, weight_H: .7 }, 
        { name: a.Ir, a: a.Jr, ammo_capacity_L: 24, ammo_capacity_H: 34, damage_L: 35.4, damage_H: 44.2, magazine: 8, mode: H.I.sa, 
            burst: 8, f: H.rarity.uncommon, i: J, d: "Shotgun_Scimitar.png", type: H.D.shotgun, weight_L: 1.15, weight_H: .6 }, 
        { name: a.Pi, a: a.Qi, ammo_capacity_L: 30, ammo_capacity_H: 40, damage_L: 100, damage_H: 125, magazine: 2, mode: H.I.na, 
            burst: 8, f: H.rarity.rare, i: J, d: "Shotgun_Raider.png", type: H.D.shotgun, weight_L: 2, weight_H: 1.4 }, 
        { name: a.jn, a: a.kn, ammo_capacity_L: 24, ammo_capacity_H: 34, damage_L: 55.6, damage_H: 69.5, magazine: 4, mode: H.I.na, 
            burst: 8, f: H.rarity.rare, i: J, d: "Shotgun_Disciple.png", type: H.D.shotgun, weight_L: 1, weight_H: .5 }, 
        { name: a.jp, a: a.kp, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 714.2, damage_H: 892.7, magazine: 5, mode: H.I.na,  piercing_incapable: true,
            burst: 1.6, race: ua.Ua, f: H.rarity.rare, i: J, d: "Shotgun_Geth.png", type: H.D.shotgun, weight_L: 2, weight_H: 1.4, 
            uncharged_modifier: .45, charged: !0, headshot_capable: !1, armor_penalty: !1, charged_damage: 1 }, 
        { name: a.yp, a: a.zp, ammo_capacity_L: 12, ammo_capacity_H: 22, damage_L: 88, damage_H: 110, magazine: 3, mode: H.I.na, 
            burst: 6, f: H.rarity.rare, i: J, d: "Shotgun_Graal.png", type: H.D.shotgun, weight_L: 2, weight_H: 1.4, charged: !0, armor_penalty: !1, charged_ammo: !0, charged_damage: 2, headshot_modifier: 3 }, 
        { name: a.Mr, a: a.Nr, ammo_capacity_L: 8, ammo_capacity_H: 18, damage_L: 167.8, damage_H: 206, magazine: 1, mode: H.I.mc, 
            burst: 8, f: H.rarity.rare, i: J, d: "Shotgun_Claymore.png", type: H.D.shotgun, weight_L: 2.5, weight_H: 2 }, 
        { name: a.ct, a: a.dt, ammo_capacity_L: 48, ammo_capacity_H: 64, damage_L: 61.7, damage_H: 77.1, magazine: 6, mode: H.I.sa, 
            burst: 8, f: H.rarity.rare, i: J, d: "Shotgun_Assault.png", type: H.D.shotgun, weight_L: 1.5, weight_H: .9, dlc: true }, 
        { name: a.Av, a: a.Bv, ammo_capacity_L: 66, ammo_capacity_H: 88, damage_L: 52.8, damage_H: 66, magazine: 22, mode: H.I.sa, 
            burst: 8, f: H.rarity.rare, i: { organic: { health: 1, armor: .5, barrier: 2, shield: 2 } }, d: "Shotgun_Quarian.png", type: H.D.shotgun, weight_L: 1.75, weight_H: 1.25, dlc: true }, 
        { name: a.ur, a: a.vr, ammo_capacity_L: 18, ammo_capacity_H: 28, damage_L: 117.6, damage_H: 147, magazine: 2, mode: H.I.na, 
            burst: 8, f: H.rarity.ultrarare, i: J, d: "Shotgun_Striker.png", type: H.D.shotgun, weight_L: 1.2, weight_H: .9 }, 
        { name: a.Ts, a: a.Us, ammo_capacity_L: 20, ammo_capacity_H: 30, damage_L: 630.7, damage_H: 788.4, magazine: 4, mode: H.I.na, native_piercing: true,
            f: H.rarity.ultrarare, i: J, d: "Shotgun_Crusader.png", type: H.D.shotgun, weight_L: 2.3, weight_H: 2 }, 
        { name: a.$B, a: a.aC, ammo_capacity_L: 12, ammo_capacity_H: 22, damage_L: 636, damage_H: 795, magazine: 4, mode: H.I.na, 
            f: H.rarity.ultrarare, i: J, d: "Shotgun_Salarian_MP.png", type: H.D.shotgun, weight_L: 2, weight_H: 1.4,  piercing_incapable: true,
            charged: !0, headshot_capable: !1, armor_penalty: !1, charged_ammo: !0, charged_damage: 1.25 / 3, charged_shots: 3, is_venom: !0, dlc: true }
    ], [
        { name: a.Ur, a: a.Vr, ammo_capacity_L: 360, ammo_capacity_H: 468, damage_L: 38.7, damage_H: 48.3, magazine: 36, mode: H.I.gy, 
            burst: 6, f: H.rarity.common, i: J, d: "SMG_Shuriken.png", type: H.D.smg, weight_L: .45, weight_H: .2 }, 
        { name: a.wr, a: a.xr, ammo_capacity_L: 275, ammo_capacity_H: 350, damage_L: 40.8, damage_H: 51, magazine: 25, mode: H.I.sa, 
            f: H.rarity.uncommon, i: J, d: "SMG_Locust.png", type: H.D.smg, weight_L: .65, weight_H: .3, headshot_modifier: 3 }, 
        { name: a.ws, a: a.xs, ammo_capacity_L: 400, ammo_capacity_H: 500, damage_L: 47.5, damage_H: 59.4, magazine: 50, mode: H.I.sa, 
            f: H.rarity.uncommon, i: J, d: "SMG_Tempest.png", type: H.D.smg, weight_L: .65, weight_H: .3 }, 
        { name: a.hp, a: a.ip, ammo_capacity_L: 600, ammo_capacity_H: 800, damage_L: 16.1, damage_H: 20.1, magazine: 100, mode: H.I.sa, 
            race: ua.Ua, f: H.rarity.rare, i: J, d: "SMG_Geth.png", type: H.D.smg, weight_L: .65, weight_H: .3, charged: !0, charged_ammo: !0, charged_damage: 2.5, dlc: true }, 
        { name: a.Gr, a: a.Hr, ammo_capacity_L: 168, ammo_capacity_H: 216, damage_L: 53.7, damage_H: 67.2, magazine: 24, mode: H.I.Wd, 
            burst: 3, f: H.rarity.rare, i: J, d: "SMG_Hornet.png", type: H.D.smg, weight_L: .85, weight_H: .45 }, 
        { name: a.ol, a: a.pl, ammo_capacity_L: 320, ammo_capacity_H: 400, damage_L: 40.1, damage_H: 50.1, magazine: 40, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "SMG_Bloodpack_MP.png", type: H.D.smg, weight_L: .85, weight_H: .45, dlc: true }, 
        { name: a.Sl, a: a.Tl, ammo_capacity_L: 0, ammo_capacity_H: 40, damage_L: 41.2, damage_H: 51.5, magazine: 30, mode: H.I.sa, 
            race: ua.Sb, f: H.rarity.ultrarare, i: { organic: { health: 1, armor: 1.5, barrier: 1, shield: 1 } }, d: "SMG_Collector.png", type: H.D.smg, weight_L: .85, weight_H: .45, dlc: true }, 
        { name: a.at, a: a.bt, ammo_capacity_L: 280, ammo_capacity_H: 360, damage_L: 102.5, damage_H: 128.1, magazine: 40, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "SMG_Hurricane.png", type: H.D.smg, weight_L: .85, weight_H: .45 }
    ], [
        { name: a.ms, a: a.ns, ammo_capacity_L: 9, ammo_capacity_H: 19, damage_L: 738.7, damage_H: 886.4, magazine: 1, mode: H.I.mc, 
            f: H.rarity.common, i: J, d: "SniperRifle_Mantis.png", type: H.D.sniper, weight_L: 1.75, weight_H: 1 }, 
        { name: a.yr, a: a.zr, ammo_capacity_L: 105, ammo_capacity_H: 131, damage_L: 86, damage_H: 107.5, magazine: 15, mode: H.I.na, 
            f: H.rarity.uncommon, i: J, d: "SniperRifle_Raptor.png", type: H.D.sniper, weight_L: 1, weight_H: .7 }, 
        { name: a.Kr, a: a.Lr, ammo_capacity_L: 120, ammo_capacity_H: 150, damage_L: 98, damage_H: 122.5, magazine: 15, mode: H.I.Wd, 
            burst: 3, f: H.rarity.uncommon, i: J, d: "SniperRifle_Incisor.png", type: H.D.sniper, weight_L: 1.5, weight_H: .9 }, 
        { name: a.qs, a: a.rs, ammo_capacity_L: 36, ammo_capacity_H: 46, damage_L: 292.1, damage_H: 365.2, magazine: 6, mode: H.I.na, 
            f: H.rarity.uncommon, i: J, d: "SniperRifle_Viper.png", type: H.D.sniper, weight_L: 1.25, weight_H: .7 }, 
        { name: a.Ul, a: a.Vl, ammo_capacity_L: 0, ammo_capacity_H: 45, damage_L: 73, damage_H: 91.3, magazine: 35, mode: H.I.sa, 
            race: ua.Sb, f: H.rarity.rare, i: J, d: "SniperRifle_Collector.png", type: H.D.sniper, weight_L: 2, weight_H: 1.4, dlc: true }, 
        { name: a.Yq, a: a.Zq, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 890.7, damage_H: 1113.4, magazine: 1, mode: H.I.mc,  piercing_incapable: true,
            f: H.rarity.rare, i: J, d: "SniperRifle_Batarian.png", type: H.D.sniper, weight_L: 2, weight_H: 1.4, charged: !0, armor_penalty: !1, charged_damage: 1.75, headshot_modifier: 3, upfront: .6, dlc: true }, 
        { name: a.fr, a: a.gr, ammo_capacity_L: 9, ammo_capacity_H: 18, damage_L: 493.4, damage_H: 616.8, magazine: 3, mode: H.I.na,  piercing_incapable: true,
            f: H.rarity.rare, i: { organic: { health: 1, armor: 1.5, barrier: 1, shield: 1 } }, d: "SniperRifle_Turian.png", type: H.D.sniper, weight_L: 2, weight_H: 1.4, headshot_capable: !1, armor_penalty: !1, dlc: true }, 
        { name: a.ss, a: a.ts, ammo_capacity_L: 7, ammo_capacity_H: 17, damage_L: 997, damage_H: 1246, magazine: 1, mode: H.I.mc, native_piercing: true,
            f: H.rarity.rare, i: J, d: "SniperRifle_Widow.png", type: H.D.sniper, weight_L: 2.5, weight_H: 2 }, 
        { name: a.gl, a: a.hl, ammo_capacity_L: 15, ammo_capacity_H: 25, damage_L: 739, damage_H: 923.8, magazine: 3, mode: H.I.na, native_piercing: true,
            f: H.rarity.ultrarare, i: J, d: "SniperRifle_BlackWidow.png", type: H.D.sniper, weight_L: 2.3, weight_H: 2 }, 
        { name: a.Tq, a: a.Uq, ammo_capacity_L: 5, ammo_capacity_H: 15, damage_L: 1236, damage_H: 1545.8, magazine: 1, mode: H.I.mc, native_piercing: true,
            race: ua.Ua, f: H.rarity.ultrarare, i: J, d: "SniperRifle_Javelin.png", type: H.D.sniper, weight_L: 2.7, weight_H: 2.4 }, 
        { name: a.ks, a: a.ls, ammo_capacity_L: 180, ammo_capacity_H: 225, damage_L: 72.6, damage_H: 92.2, magazine: 25, mode: H.I.sa, 
            f: H.rarity.ultrarare, i: J, d: "SniperRifle_Indra.png", type: H.D.sniper, weight_L: 1, weight_H: .7 }, 
        { name: a.gt, a: a.ht, ammo_capacity_L: 30, ammo_capacity_H: 39, damage_L: 396.2, damage_H: 515.5, magazine: 3, mode: H.I.na, 
            f: H.rarity.ultrarare, i: J, d: "SniperRifle_Valiant.png", type: H.D.sniper, weight_L: 1.75, weight_H: 1 }
    ]
    ];
    H.nh = [
        [
        { name: a.Bi, a: a.Ci, f: H.rarity.common, R: H.U.ic, d: "AssaultRifleMagSize.png", 
        evolutions: [{ attributes: { magazineSize: .4 } }, { attributes: { magazineSize: .5 } }, { attributes: { magazineSize: .6 } }, { attributes: { magazineSize: .7 } }, { attributes: { magazineSize: .8 } }] },
        { name: a.Hi, a: a.Ii, f: H.rarity.common, R: H.U.Db, d: "AssaultRifleAccuracy.png", 
        evolutions: [{ attributes: { accuracy: .15 } }, { attributes: { accuracy: .2 } }, { attributes: { accuracy: .25 } }, { attributes: { accuracy: .3 } }, { attributes: { accuracy: .35 } }] }, 
        { name: a.Ji, a: a.Ki, f: H.rarity.common, R: H.U.eb, d: "AssaultRifleStability.png",
        evolutions: [{ attributes: { stability: .3 } }, { attributes: { stability: .4 } }, { attributes: { stability: .5 } }, { attributes: { stability: .6 } }, { attributes: { stability: .7 } }] },
        { name: a.xi, a: a.yi, f: H.rarity.uncommon, R: H.U.kb, d: "AssaultRifleDamage.png", 
        evolutions: [{ attributes: { weaponDamageAssault: .15 } }, { attributes: { weaponDamageAssault: .175 } }, { attributes: { weaponDamageAssault: .2 } }, 
            { attributes: { weaponDamageAssault: .225 } }, { attributes: { weaponDamageAssault: .25 } }] }, 
        { name: a.Fi, a: a.Gi, f: H.rarity.uncommon, R: H.U.yb, d: "AssaultRifleForce.png", heavy: true, evolutions: [{ attributes: { enemyArmorPenetration: .25, penetration: .5, pierceDamage: .6 }
        }, { attributes: { enemyArmorPenetration: .35, penetration: .65, pierceDamage: .55 } }, { attributes: { enemyArmorPenetration: .45, penetration: .8, pierceDamage: .5 } }, { attributes: { enemyArmorPenetration: .55, penetration: .95, pierceDamage: .45 } }, { attributes: { enemyArmorPenetration: .65, penetration: 1.1, pierceDamage: .4 } }]
    }, {
        name: a.zi, a: a.Ai, f: H.rarity.rare, R: H.U.kb, d: "AssaultRifleSuperPen.png", heavy: true, evolutions: [{ attributes: { enemyArmorPenetration: .5, penetration: .75, pierceDamage: .6, modWeightAssault: -.5 } }, {
            attributes: {
                enemyArmorPenetration: .6,
                penetration: .9, pierceDamage: .55, modWeightAssault: -.5
            }
        }, { attributes: { enemyArmorPenetration: .7, penetration: 1.05, pierceDamage: .5, modWeightAssault: -.5 } }, { attributes: { enemyArmorPenetration: .8, penetration: 1.2, pierceDamage: .45, modWeightAssault: -.5 } }, { attributes: { enemyArmorPenetration: .9, penetration: 1.35, pierceDamage: .4, modWeightAssault: -.5 } }]
    }, {
        name: a.Di, a: a.Ei, f: H.rarity.rare, R: H.U.dd, d: "AssaultRifleMelee.png", evolutions: [{ attributes: { modMeleeDamage: .15 } }, { attributes: { modMeleeDamage: .175 } }, { attributes: { modMeleeDamage: .2 } },
        { attributes: { modMeleeDamage: .225 } }, { attributes: { modMeleeDamage: .25 } }]
    }, { name: a.Li, a: a.Mi, f: H.rarity.rare, R: H.U.Db, d: "AssaultRifleSuperScope.png", heavy: true, evolutions: [{ attributes: { accuracy: .15, modWeightAssault: -.5 } }, { attributes: { accuracy: .2, modWeightAssault: -.5 } }, { attributes: { accuracy: .25, modWeightAssault: -.5 } }, { attributes: { accuracy: .3, modWeightAssault: -.5 } }, { attributes: { accuracy: .35, modWeightAssault: -.5 } }] }, {
        name: a.Ni, a: a.Oi, f: H.rarity.rare, R: H.U.yb, d: "AssaultRifleUltraLight_MP5.png", light: true, evolutions: [{ attributes: { modULMAssault: .08 } }, { attributes: { modULMAssault: .1 } },
        { attributes: { modULMAssault: .12 } }, { attributes: { modULMAssault: .14 } }, { attributes: { modULMAssault: .15 } }]
    }], [{ name: a.fu, a: a.gu, f: H.rarity.common, R: H.U.kb, d: "PistolDamage.png", evolutions: [{ attributes: { weaponDamagePistol: .15 } }, { attributes: { weaponDamagePistol: .175 } }, { attributes: { weaponDamagePistol: .2 } }, { attributes: { weaponDamagePistol: .225 } }, { attributes: { weaponDamagePistol: .25 } }] }, {
        name: a.hu, a: a.iu, f: H.rarity.common, R: H.U.ic, d: "PistolMagSize.png", evolutions: [{ attributes: { magazineSize: .4 } }, { attributes: { magazineSize: .5 } }, { attributes: { magazineSize: .6 } },
        { attributes: { magazineSize: .7 } }, { attributes: { magazineSize: .8 } }]
    }, { name: a.ru, a: a.su, f: H.rarity.common, R: H.U.Db, d: "PistolAccuracy.png", evolutions: [{ attributes: { accuracy: .15 } }, { attributes: { accuracy: .2 } }, { attributes: { accuracy: .25 } }, { attributes: { accuracy: .3 } }, { attributes: { accuracy: .35 } }] }, 
    { name: a.ju, a: a.ku, f: H.rarity.uncommon, R: H.U.dd, d: "PistolStability.png", evolutions: [{ attributes: { modMeleeDamage: .15 } }, { attributes: { modMeleeDamage: .175 } }, { attributes: { modMeleeDamage: .2 } }, { attributes: { modMeleeDamage: .225 } }, { attributes: { modMeleeDamage: .25 } }] },
    { name: a.lu, a: a.mu, f: H.rarity.uncommon, R: H.U.yb, d: "PistolReloadSpeed.png", evolutions: [{ attributes: { enemyArmorPenetration: .25, penetration: .5, pierceDamage: .6 } }, { attributes: { enemyArmorPenetration: .35, penetration: .65, pierceDamage: .55 } }, { attributes: { enemyArmorPenetration: .45, penetration: .8, pierceDamage: .5 } }, { attributes: { enemyArmorPenetration: .55, penetration: .95, pierceDamage: .45 } }, { attributes: { enemyArmorPenetration: .65, penetration: 1.1, pierceDamage: .4 } }] }, {
        name: a.bu, a: a.cu, f: H.rarity.rare, R: H.U.kb, d: "PistolHeadShot.png", evolutions: [{ attributes: { headshotMod: .2 } },
        { attributes: { headshotMod: .25 } }, { attributes: { headshotMod: .3 } }, { attributes: { headshotMod: .35 } }, { attributes: { headshotMod: .4 } }]
    }, { name: a.du, a: a.eu, f: H.rarity.rare, R: H.U.kb, d: "PistolSuperDamage.png", heavy: true, evolutions: [{ attributes: { weaponDamagePistol: .2, modWeightPistol: -.5 } }, { attributes: { weaponDamagePistol: .25, modWeightPistol: -.5 } }, { attributes: { weaponDamagePistol: .3, modWeightPistol: -.5 } }, { attributes: { weaponDamagePistol: .35, modWeightPistol: -.5 } }, { attributes: { weaponDamagePistol: .4, modWeightPistol: -.5 } }] }, {
        name: a.nu, a: a.ou, f: H.rarity.rare,
        R: H.U.Db, d: "PistolPowerDamage_MP5.png", evolutions: [{ attributes: { globalPowerDamage: .1 } }, { attributes: { globalPowerDamage: .15 } }, { attributes: { globalPowerDamage: .2 } }, { attributes: { globalPowerDamage: .25 } }, { attributes: { globalPowerDamage: .3 } }]
    }, { name: a.PB, a: a.QB, f: H.rarity.rare, R: H.U.ic, d: "PistolUltraLight.png", light: true, evolutions: [{ attributes: { modULMPistol: .3 } }, { attributes: { modULMPistol: .35 } }, { attributes: { modULMPistol: .4 } }, { attributes: { modULMPistol: .45 } }, { attributes: { modULMPistol: .5 } }] }], [{
        name: a.Dx, a: a.Ex, f: H.rarity.common, R: H.U.dd, d: "ShotgunMeleeDamage.png",
        evolutions: [{ attributes: { modMeleeDamage: .15 } }, { attributes: { modMeleeDamage: .175 } }, { attributes: { modMeleeDamage: .2 } }, { attributes: { modMeleeDamage: .225 } }, { attributes: { modMeleeDamage: .25 } }]
    }, { name: a.Gx, a: a.Hx, f: H.rarity.common, R: H.U.kb, d: "ShotgunDamage.png", evolutions: [{ attributes: { weaponDamageShotgun: .15 } }, { attributes: { weaponDamageShotgun: .175 } }, { attributes: { weaponDamageShotgun: .2 } }, { attributes: { weaponDamageShotgun: .225 } }, { attributes: { weaponDamageShotgun: .25 } }] }, {
        name: a.Qx, a: a.Rx, f: H.rarity.common, R: H.U.yb, d: "ShotgunAccuracy.png", evolutions: [{ attributes: { accuracy: .3 } },
        { attributes: { accuracy: .35 } }, { attributes: { accuracy: .4 } }, { attributes: { accuracy: .45 } }, { attributes: { accuracy: .5 } }]
    }, {
        name: a.Ox, a: a.Px, f: H.rarity.uncommon, R: H.U.eb, d: "ShotgunReloadSpeed.png", evolutions: [{ attributes: { enemyArmorPenetration: .25, penetration: .25, pierceDamage: .6 } }, { attributes: { enemyArmorPenetration: .35, penetration: .35, pierceDamage: .55 } }, { attributes: { enemyArmorPenetration: .45, penetration: .45, pierceDamage: .5 } }, { attributes: { enemyArmorPenetration: .55, penetration: .55, pierceDamage: .45 } }, {
            attributes: {
                enemyArmorPenetration: .65,
                penetration: .65, pierceDamage: .4
            }
        }]
    }, { name: a.Sx, a: a.Tx, f: H.rarity.uncommon, R: H.U.ic, d: "ShotgunStability.png", evolutions: [{ attributes: { ammoCapacity: .5 } }, { attributes: { ammoCapacity: .6 } }, { attributes: { ammoCapacity: .7 } }, { attributes: { ammoCapacity: .8 } }, { attributes: { ammoCapacity: .9 } }] }, {
        name: a.Ix, a: a.Jx, f: H.rarity.rare, R: H.U.kb, d: "ShotgunDamageAndPen.png", heavy: true, evolutions: [{ attributes: { enemyArmorPenetration: .25, penetration: .25, pierceDamage: .5, weaponDamageShotgun: .15, modWeightShotgun: -.5 } }, {
            attributes: {
                enemyArmorPenetration: .35, penetration: .35, pierceDamage: .45,
                weaponDamageShotgun: .175, modWeightShotgun: -.5
            }
        }, { attributes: { enemyArmorPenetration: .45, penetration: .45, pierceDamage: .4, weaponDamageShotgun: .2, modWeightShotgun: -.5 } }, { attributes: { enemyArmorPenetration: .55, penetration: .55, pierceDamage: .35, weaponDamageShotgun: .225, modWeightShotgun: -.5 } }, { attributes: { enemyArmorPenetration: .65, penetration: .65, pierceDamage: .3, weaponDamageShotgun: .25, modWeightShotgun: -.5 } }]
    }, {
        name: a.Kx, a: a.Lx, f: H.rarity.rare, R: H.U.dd, d: "ShotgunSuperMelee.png", heavy: true, evolutions: [{ attributes: { modMeleeDamage: .3, modWeightShotgun: -.5 } },
        { attributes: { modMeleeDamage: .35, modWeightShotgun: -.5 } }, { attributes: { modMeleeDamage: .4, modWeightShotgun: -.5 } }, { attributes: { modMeleeDamage: .45, modWeightShotgun: -.5 } }, { attributes: { modMeleeDamage: .5, modWeightShotgun: -.5 } }]
    }, { name: a.Ux, a: a.Vx, f: H.rarity.rare, R: H.U.yb, d: "ShotgunUltraLight_MP5.png", light: true, evolutions: [{ attributes: { modULMShotgun: .08 } }, { attributes: { modULMShotgun: .1 } }, { attributes: { modULMShotgun: .12 } }, { attributes: { modULMShotgun: .14 } }, { attributes: { modULMShotgun: .15 } }] }], [{
        name: a.Sv, a: a.Tv, f: H.rarity.common, R: H.U.eb, d: "SMGConstraintDamage.png",
        evolutions: [{ attributes: { heatSink: .25 } }, { attributes: { heatSink: .3 } }, { attributes: { heatSink: .35 } }, { attributes: { heatSink: .4 } }, { attributes: { heatSink: .45 } }]
    }, { name: a.Yv, a: a.Zv, f: H.rarity.common, R: H.U.ic, d: "SMGMagSize.png", evolutions: [{ attributes: { magazineSize: .4 } }, { attributes: { magazineSize: .5 } }, { attributes: { magazineSize: .6 } }, { attributes: { magazineSize: .7 } }, { attributes: { magazineSize: .8 } }] }, {
        name: a.fw, a: a.gw, f: H.rarity.common, R: H.U.Db, d: "SMGAccuracy.png", evolutions: [{ attributes: { accuracy: .15 } }, { attributes: { accuracy: .2 } }, { attributes: { accuracy: .25 } }, { attributes: { accuracy: .3 } },
        { attributes: { accuracy: .35 } }]
    }, { name: a.Uv, a: a.Vv, f: H.rarity.uncommon, R: H.U.kb, d: "SMGDamage.png", evolutions: [{ attributes: { weaponDamageSMG: .15 } }, { attributes: { weaponDamageSMG: .175 } }, { attributes: { weaponDamageSMG: .2 } }, { attributes: { weaponDamageSMG: .225 } }, { attributes: { weaponDamageSMG: .25 } }] }, 
    { name: a.hw, a: a.iw, f: H.rarity.uncommon, R: H.U.yb, d: "SMGStability.png", light: true, evolutions: [{ attributes: { modULMSMG: .5 } }, { attributes: { modULMSMG: .6 } }, { attributes: { modULMSMG: .7 } }, { attributes: { modULMSMG: .8 } }, { attributes: { modULMSMG: .9 } }] }, {
        name: a.Wv, a: a.Xv, f: H.rarity.rare, R: H.U.kb, d: "SMGPenetration.png",
        evolutions: [{ attributes: { enemyArmorPenetration: .5, penetration: .25, pierceDamage: .6 } }, { attributes: { enemyArmorPenetration: .6, penetration: .35, pierceDamage: .55 } }, { attributes: { enemyArmorPenetration: .7, penetration: .45, pierceDamage: .5 } }, { attributes: { enemyArmorPenetration: .8, penetration: .55, pierceDamage: .45 } }, { attributes: { enemyArmorPenetration: .9, penetration: .65, pierceDamage: .4 } }]
    }, {
        name: a.$v, a: a.aw, f: H.rarity.rare, R: H.U.Db, d: "SMGPowerDamage_MP5.png", evolutions: [{ attributes: { globalPowerDamage: .1 } }, { attributes: { globalPowerDamage: .15 } },
        { attributes: { globalPowerDamage: .2 } }, { attributes: { globalPowerDamage: .25 } }, { attributes: { globalPowerDamage: .3 } }]
    }, { name: a.dw, a: a.ew, f: H.rarity.rare, R: H.U.yb, d: "SMGStabilization.png", evolutions: [{ attributes: { stability: .3 } }, { attributes: { stability: .4 } }, { attributes: { stability: .5 } }, { attributes: { stability: .6 } }, { attributes: { stability: .7 } }] }], [{
        name: a.Ey, a: a.Fy, f: H.rarity.common, R: H.U.ic, d: "SniperRifleReloadSpeed.png", evolutions: [{ attributes: { ammoCapacity: .5 } }, { attributes: { ammoCapacity: .6 } }, { attributes: { ammoCapacity: .7 } }, { attributes: { ammoCapacity: .8 } },
        { attributes: { ammoCapacity: .9 } }]
    }, { name: a.uy, a: a.vy, f: H.rarity.uncommon, R: H.U.Db, d: "SniperRifleAccuracy.png", evolutions: [{ attributes: { accuracy: .15 } }, { attributes: { accuracy: .2 } }, { attributes: { accuracy: .25 } }, { attributes: { accuracy: .3 } }, { attributes: { accuracy: .35 } }] }, 
    { name: a.wy, a: a.xy, f: H.rarity.uncommon, R: H.U.kb, d: "SniperRifleDamage.png", evolutions: [{ attributes: { weaponDamageSniper: .15 } }, { attributes: { weaponDamageSniper: .175 } }, { attributes: { weaponDamageSniper: .2 } }, { attributes: { weaponDamageSniper: .225 } }, { attributes: { weaponDamageSniper: .25 } }] }, {
        name: a.Ay,
        a: a.By, f: H.rarity.uncommon, R: H.U.yb, d: "SniperRifleConstraintDamage.png", evolutions: [{ attributes: { enemyArmorPenetration: .25, penetration: .75, pierceDamage: .5 } }, { attributes: { enemyArmorPenetration: .35, penetration: .9, pierceDamage: .45 } }, { attributes: { enemyArmorPenetration: .45, penetration: 1.05, pierceDamage: .4 } }, { attributes: { enemyArmorPenetration: .55, penetration: 1.2, pierceDamage: .35 } }, { attributes: { enemyArmorPenetration: .65, penetration: 1.35, pierceDamage: .3 } }]
    }, {
        name: a.yy, a: a.zy, f: H.rarity.rare, R: H.U.kb, d: "SniperRifleDamageAndPen.png", heavy: true, evolutions: [{
            attributes: {
                enemyArmorPenetration: .25,
                penetration: .5, pierceDamage: .5, weaponDamageSniper: .15, modWeightSniper: -.5
            }
        }, { attributes: { enemyArmorPenetration: .35, penetration: .65, pierceDamage: .45, weaponDamageSniper: .175, modWeightSniper: -.5 } }, { attributes: { enemyArmorPenetration: .45, penetration: .8, pierceDamage: .4, weaponDamageSniper: .2, modWeightSniper: -.5 } }, { attributes: { enemyArmorPenetration: .55, penetration: .95, pierceDamage: .35, weaponDamageSniper: .225, modWeightSniper: -.5 } }, {
            attributes: {
                enemyArmorPenetration: .65, penetration: 1.1, pierceDamage: .3, weaponDamageSniper: .25,
                modWeightSniper: -.5
            }
        }]
    }, { name: a.Gy, a: a.Hy, f: H.rarity.rare, R: H.U.Db, d: "SniperRifleSuperScope.png", heavy: true, evolutions: [{ attributes: { accuracy: .15, modWeightSniper: -.5 } }, { attributes: { accuracy: .2, modWeightSniper: -.5 } }, { attributes: { accuracy: .25, modWeightSniper: -.5 } }, { attributes: { accuracy: .3, modWeightSniper: -.5 } }, { attributes: { accuracy: .35, modWeightSniper: -.5 } }] }, {
        name: a.Iy, a: a.Jy, f: H.rarity.rare, R: H.U.eb, d: "SniperRifleUltraLight_MP5.png", light: true, evolutions: [{ attributes: { modULMSniper: .08 } }, { attributes: { modULMSniper: .1 } }, { attributes: { modULMSniper: .12 } }, { attributes: { modULMSniper: .14 } },
        { attributes: { modULMSniper: .15 } }]
    }]];
    /*
     Copyright 2013
    
     @requires game.equipment.js
     @requires game.kits.js
     @requires game.powers.js
     @requires game.weapons.js
    */
    h = h || {}; jQuery191(function () { h.Xa.initialize() });
    (function (d, c) {

        // x - list of parameters to figure out
        // d - weapon
        // f - other weapon
        function e(x, d, f) {
            var k = {}, sources = []; 
            f = c.extend({ Jf: null }, f); 
            d || (d = weapon_loadout[G]); 
            for (var e = 0; e < x.length; e++)
                k[x[e]] = 0;
            for (var e = [3, 4, 0, 1, 2], m = [build[3], build[4], build[0], build[1], build[2]], I = 0; I < m.length; I++) { 
                var F = character.powers[e[I]], ba = is_toggled[e[I]]; 
                if (m[I] && (F.M || ba)) 
                    for (var g = 0; g < m[I].length; g++) { 
                        var n = m[I][g]; 
                        if (F.evolutions[n].attributes) { 
                            var q = F.evolutions[n].attributes; 
                            ba && F.pb && (q = F.pb(q)); 
                            if (q = K(q, x, k)) 
                                n = { type: "power", object: F, ia: n }, sources.push(c.extend(q, n)) 
                        } 
                    } 
            } 
            P(d, sources, x, k); 
            f.Jf && P(f.Jf, sources, x, k); 
            for (e = 0; e < equipment_type.length; e++)
                -1 != equipment_type[e] && (
                    d = equipment[e][equipment_type[e]], 
                    q = K(d.evolutions[equipment_level[e]].attributes, x, k)
                ) && (n = { type: "equipment", object: d, ia: equipment_level[e] }, sources.push(c.extend(q, n))); 
            return { data: k, C: sources }
        }


        // f - list of parameters to figure out
        function P(weapon, sources, f, k) { 
            if (-1 != weapon.mod_1_type) { 
                var t = mods[weapon.type][weapon.mod_1_type], 
                e = K(t.evolutions[weapon.mod_1_level].attributes, f, k); 
                e && sources.push(c.extend(e, { type: "mod", object: t, ia: weapon.mod_1_level })) 
            } 
            if (-1 != weapon.mod_2_type) {
                t = mods[weapon.type][weapon.mod_2_type], 
                (e = K(t.evolutions[weapon.mod_2_level].attributes, f, k)) && 
                sources.push(c.extend(e, { type: "mod", object: t, ia: weapon.mod_2_level }))
            }
        } 

        function s(c) {
            for (var d = {}, f = character.powers[c], k = 0; k < f.evolutions.length; k++) {
                var t = !1; 
                build[c] && -1 != build[c].indexOf(k) && (t = !0); 
                if (0 == k || t) 
                    for (var e in f.evolutions[k].attributes) 
                        d[e] || (d[e] = { value: 0, C: [] }), 
                        d[e].value += f.evolutions[k].attributes[e], 
                        d[e].C.push({ attributes: [{ attr: e, value: f.evolutions[k].attributes[e] }], object: f, ia: k, type: "power" })
            } 
            return d
        }

        function has_biotic_primer_active() {
            for (var i = 0; i < character.powers.length; ++i)
                if (character.powers[i].is_biotic_primer && is_toggled[i] && build[i] && build[i].length > 0)
                    return true;
            return false;
        }

        function has_fire_dot_active() {
            for (var i = 0; i < 3; ++i)
                if (is_toggled[i] && build[i]) {
                    var path = build[i];
                    for (var j = 0; j < path.length; ++j)
                        if (character.powers[i].evolutions[build[i][j]].attributes.fireDoT)
                            return i;
                }
            return -1;
        }

        // c - list of attributes of something
        // d - list of parameters to figure out
        function K(c, d, f) { 
            var k = [], t; 
            for (t in c) 
                -1 != d.indexOf(t) &&  (
                    f[t] += c[t], 
                    k.push({ attr: t, value: c[t] })
                ); 
            return 0 == k.length ? !1 : { attributes: k } 
        }
        
        function g(c, d) { 
            var f = 0, k = e(["globalPowerDamage"]), f = f + k.data.globalPowerDamage; 
            return { value: d.Yc * (1 + f), C: [] } 
        } 
        
        function z(c) {
            var d = [], f = s(c); 
            c = f.durability.value - character.powers[c].evolutions[0].attributes.durability; 
            d = f.durability.C; 
            d.shift(); 
            f.omniShieldHealth && (c += f.omniShieldHealth.value, d = d.concat(f.omniShieldHealth.C)); 
            f = f.omniShield.value; 
            return { value: f * (1 + c), C: d }
        } 

        function fa(d, r) {
            var f = [], k = 0; 
            r = c.extend({ ea: "health" }, r); 
            var t = s(d); 
            t.powerDamage && (k += t.powerDamage.value, f = t.powerDamage.C); 
            var m = character.powers[d], g = m.i[r.ea]; 
            if (t.powerDamageBarrier) { 
                if ("barrier" == r.ea || "shield" == r.ea) 
                    g = 5; 
                f = f.concat(t.powerDamageBarrier.C) 
            } 
            var I = e("armorPowerDamage enemyDamageTaken enemyPowerDamageTaken globalDamage globalPowerDamage techDamage".split(" ")), f = f.concat(I.C), 
            F = I.data.enemyDamageTaken + I.data.enemyPowerDamageTaken, 
            k = k + (I.data.globalDamage + I.data.globalPowerDamage + I.data.techDamage), 
            k = k + I.data.armorPowerDamage, 
            I = 0, 
            k = t.overload.value * (1 + k) * (1 + F); t.neuralShock && (I = k * m.i[r.ea]); 
            return { value: k * g + I, C: f }
        } 

        function u(c, d, f, k) { 
            var t = [], m = 0, c0 = c; 
            c = s(c); 
            c[f] && (m += c[f].value, t = c[f].C); 
            if (k) { 
                f = e(k); 
                for (var g in f.data) 
                    m += f.data[g]; 
                0 < f.C.length && (t = t.concat(f.C)) 
            }
            if (has_cryo_active())
                c[d].value *= get_cryo_bonus(c0);
            return { value: c[d].value * (1 + m), C: t } 
        } 

        function p(d, r, f, k, t) {
            var m = [], g = 0, I = 1, d0 = d;
            t = c.extend({ ea: "health" }, t); 
            var F = s(d); 
            F[f] && (g += F[f].value, m = F[f].C); 
            F.powerDamageArmor && ("armor" == t.ea && (I += F.powerDamageArmor.value), m = m.concat(F.powerDamageArmor.C)); 
            F.powerDamageBarrier && ("barrier" == t.ea && (I += F.powerDamageBarrier.value), m = m.concat(F.powerDamageBarrier.C)); 
            F.powerDamageShield && ("shield" == t.ea && (I += F.powerDamageShield.value), F.powerDamageBarrier && F.powerDamageBarrier.value == F.powerDamageShield.value || (m = m.concat(F.powerDamageShield.C))); 
            f = character.powers[d]; 
            f.i && (I *= f.i[t.ea]); 
            d = ["globalDamage", "globalPowerDamage", "enemyDamageTaken", "enemyPowerDamageTaken"];
            f.type == power_types.biotic ? d = d.concat("bioticDamage") : f.type == power_types.ta && (d = d.concat("techDamage")); 
            k && (d = d.concat("modMeleeDamage")); 
            "armor" != r && (d = d.concat("armorPowerDamage")); d = e(d); m = m.concat(d.C); 
            g += d.data.globalDamage + d.data.globalPowerDamage; 
            f.type == power_types.biotic ? g += d.data.bioticDamage : f.type == power_types.ta && (g += d.data.techDamage); 
            "armor" != r && (g += d.data.armorPowerDamage); 
            f = d.data.enemyDamageTaken + d.data.enemyPowerDamageTaken; 
            var ba = 0, ba = "undefined" !== typeof t.Yc ? t.Yc : F[r].value; 
            r = ba * (1 + g) * (1 + f) * I; 
            k && (r *= 1 + d.data.modMeleeDamage);
            if (character.powers[d0].is_inferno_glitched && equipment_type[3] == 5)
                r *= 8/3;
            if (F["powerDOT"]) {
                r *= 1 + F.powerDOT.value
                m = m.concat(F.powerDOT.C)
            }
            if (has_cryo_active())
                r *= get_cryo_bonus(d0);
            return { value: r, C: m }
        }

        function A(c) { 
            var r = [], f = 0; c = s(c); 
            c.rechargeSpeed && (f += c.rechargeSpeed.value, r = c.rechargeSpeed.C); 
            var k = !1, t = e(["globalRecharge", "bioticOrbs", "orbRecharge"]); 
            0 != t.data.globalRecharge && (f += t.data.globalRecharge, k = !0); 
            0 != t.data.bioticOrbs && (f += t.data.orbRecharge * t.data.bioticOrbs, k = !0); 
            k && (r = r.concat(t.C)); k = d.Kg().value; c = c.baseRechargeSpeed.value; 
            return { value: 0 <= f + k ? 1 / (1 + f + k) * c : c * (1 - (f + k)), C: r } 
        } 
        
        function m(c, d, f) {
            var k = [], t = s(c); c = 0; 
            t[f] && (c += t[f].value, k = t[f].C); d = t[d].value; 
            return { value: d / (1 + c), C: k }
        }

        function get_special_DR(c, name) {
            var x = s(c)[name]
            x.C.shift();
            if (x.value < .3) {
                x.C.shift();
                x.value = 0;
            }
            return x;
        }

        function ha(d, r) { 
            var f = [], k = 0, t = 1; 
            r = c.extend({ ea: "health" }, r); 
            var m = s(d); 
            m.powerDamage && (k += m.powerDamage.value, f = m.powerDamage.C); 
            var g = character.powers[d]; 
            g.i && (t *= g.i[r.ea]); 
            g = e(["globalDamage", "globalPowerDamage", "meleeDamage", "modMeleeDamage", "techDamage", "meleeDamageArmor", "meleeDamageShield"]);
            f = f.concat(g.C); 
            k += 2 * g.data.globalDamage;
            k += g.data.globalPowerDamage + g.data.meleeDamage + g.data.techDamage; 
            k = m.shadowstrike.value * (1 + k) * t; 
            k *= 1 + g.data.modMeleeDamage;
            if (r.ea == "armor")
                k *= 1 + g.data.meleeDamageArmor;
            else if (r.ea == "barrier" || r.ea == "shield")
                k *= 1 + g.data.meleeDamageShield;
            // else if (r.ea == "shield")
            //     k *= 1 + g.data.meleeDamageShield;
            return { value: k, C: f } 
        }

        function O(c) {
            var d = [], f = 0; 
            c = s(c); c.shieldBoostPower && (f += c.shieldBoostPower.value, d = c.shieldBoostPower.C); 
            var k = e(["globalPowerDamage", "shieldBoostPassive"]), f = f + (k.data.globalPowerDamage + k.data.shieldBoostPassive), d = d.concat(k.C); 
            c = c.shieldBoost.value; 
            return { value: c * (1 + f), C: d }
        }

        function n(c, d) { 
            var f = 0, k = 0, t = s(c); 
            t.powerDamage && (f += t.powerDamage.value, 0 < f && (f -= .2)); 
            t = e(["globalPowerDamage", "enemyPowerDamageTaken"]); 
            f += t.data.globalPowerDamage; 
            k += t.data.enemyPowerDamageTaken; 
            return { 
                value: d.Yc * (1 + f) * (1 + k), C: [] 
            } 
        } 
        
        function Z(c, d) {
            var f = 0, k = s(c); k.powerDamage &&
                (f += k.powerDamage.value, 0 < f && (f -= .3)); k = e(["globalPowerDamage"]); 
                f += k.data.globalPowerDamage; 
                return { value: d.Yc * (1 + f), C: [] }
        } 

        function D(c) { 
            if (!c) 
                return !0; 
            c = Hash.decode(c); 
            if (c[0] < spec_patterns.length) { 
                c = spec_patterns[c[0]].slice(0); 
                for (var d = 0; d < c.length; d++)
                if (!character.powers[d].g && c[d]) 
                    return !1; 
                is_toggled = c; 
                return !0 
            } 
            return !1 
        } 

        function ca(c, d) { 
            if (!c || ".." == c) 
                return !0; 
            if (2 != c.length) 
                return !1; 
            var f = Hash.decode(c), k = f[0], f = f[1]; 
            return k < equipment[d].length && f < equipment[d][k].evolutions.length ? (equipment_type[d] = k, equipment_level[d] = f, !0) : !1 
        } 

        function ja(d) {
            if (!d || 3 > d.length) 
                return null; 
            d = Hash.decode(d);
            var r = c.extend({}, { type: d[0], index: d[1], ia: d[2], mod_1_type: -1, mod_1_level: -1, mod_2_type: -1, mod_2_level: -1 }); 
            if (r.type >= weapons.length || r.index >= weapons[r.type].length || r.ia > sa.xd) 
                return null; 
            null != d[3] && d[3] < mods[r.type].length && null != d[4] && d[4] <= sa.Qb && (r.mod_1_type = d[3], r.mod_1_level = d[4]); 
            null != d[5] && d[5] < mods[r.type].length && null != d[6] && d[6] <= sa.Qb && (r.mod_2_type = d[5], r.mod_2_level = d[6]); 
            return r
        }

        function y() {
            for (var c = Hash.encode([class_index, character_index_in_class]), d = "", f = 0; 5 > f; f++)
                if (build[f]) {
                    var k; 
                    a: {
                    k = build[f]; 
                    for (var t = 0; t < evolution_paths.length; t++)
                        if (k.length == evolution_paths[t].length) {
                            for (var e = !0, m = 0; m < k.length; m++)
                                if (evolution_paths[t][m] != k[m]) {
                                     e = !1; break 
                                } 
                                if (e) { 
                                    k = t; 
                                    break a 
                                }
                        } 
                    k = -1
                    } 
                    d += Hash.encode([k], !0)
                } else d += Hash.empty; 
                a: { 
                for (f = 0; f < spec_patterns.length; f++) { 
                    k = !0; 
                    for (t = 0; t < is_toggled.length; t++)
                        if (is_toggled[t] != spec_patterns[f][t]) { 
                            k = !1; 
                            break 
                        } 
                        if (k) break a 
                } 
                f = -1 
                } 
                0 != f && (d += Hash.encode([f])); 
                d = Core.trimRight(d, Hash.empty); 
                f = Hash.delimiter; 
                k = ""; 
                for (t = 0; t < weapon_loadout.length; t++)
                    e = weapon_loadout[t], e = Hash.encode([e.type, e.index, e.ia, e.mod_1_type, e.mod_1_level, e.mod_2_type, e.mod_2_level], !0), k = "" != e ? k + (e + Hash.delimiter) : k + Hash.delimiter; 
                    t = Hash.encode([equipment_type[0], equipment_level[0], equipment_type[1], equipment_level[1], equipment_type[2], equipment_level[2], equipment_type[3], equipment_level[3]], !0); 
                    "" != t && (k += t); 
                    c += f + k + Hash.delimiter + d; 
                    window.history.replaceState ? window.history.replaceState({}, document.title, "#" + c) : window.location.replace("#" + c)
        }

        function ea() {
            var c = !1, build_code = Core.getHash().split(Hash.delimiter), f; 
            a: { 
                for (f = 0; f < classes.length; f++)
                    if (classes[f] == build_code[0]) break a; 
                f = !1 
            } 
            if (!1 === f) { 
                var k = Hash.decode(build_code[0]); 
                f = k[0]; 
                "undefined" === typeof k[1] ? f < classes.length && (class_index = f) : 
                "undefined" !== typeof build_code[1] && "" !== build_code[1] ? (Telemetry.trackEvent("ME3 Builder", "Import (" + classes[f] + ")", "kit: " + k[1], !0), da(f, k[1], !1)) : (da(f, k[1]), c = !0) 
            } else f < classes.length && (class_index = f), c = !0; 
            if (build_code[1]) {
                var k = ja(build_code[1]), e = ja(build_code[2]); 
                k && (weapon_loadout[0] = k); 
                e && (k ? k.type != e.type ? weapon_loadout[1] = e : c = !0 : (weapon_loadout[0] = e, c = !0));
                e || "" == build_code[2] || (c = !0); 
                k || e || (equip_default_weapons(classes[f]), c = !0); 
                build_code[3] && (c |= !ca(build_code[3].substr(0, 2), d.Ab.jb), c |= !ca(build_code[3].substr(2, 2), d.Ab.mb), c |= !ca(build_code[3].substr(4, 2), d.Ab.Hb), c |= !ca(build_code[3].substr(6, 2), d.Ab.Fa)); 
                points_available = points_at_level[19]; 
                if (build_code[4]) 
                    for (f = 0; f < build_code[4].length; f++)
                        if (5 == f) 
                            c |= !D(build_code[4][f]); 
                        else if (build_code[4][f] != Hash.empty) {
                            k = f; 
                            e = Hash.decode(build_code[4][f])[0]; 
                            if (5 > k && e < evolution_paths.length) { 
                                build[k] = evolution_paths[e].slice(0); 
                                for (e = 0; e < build[k].length; e++)
                                    points_available -= cost_of_evolution[build[k][e]]; 
                                k = !0 
                            } 
                            else 
                                k = !1; 
                            c |= !k
                        }
            } 
            c && y()
        } 
        
        function equip_default_weapons(c) {
            switch (c) { 
                case "adept": 
                case "engineer": 
                    equip_weapon(0, weapon_type.pistol, 3, 9); 
                    break; 
                case "soldier":
                case "infiltrator":
                    equip_weapon(0, weapon_type.shotgun, 11, 9); 
                    break; 
                case "sentinel":
                case "vanguard": 
                    equip_weapon(0, weapon_type.shotgun, 10, 9);
                    break;
            } 
        }

        function da(_class, index, f) { 
            if (_class < classes.length && index < characters[_class].length) {
                class_index = _class; 
                character_index_in_class = index;
                character = characters[_class][index];
                if (-1 == weapon_loadout[0].type && -1 == weapon_loadout[1].type && !1 !== f) 
                    equip_default_weapons(classes[_class])
            }
        } 

        function equip_weapon(c, d, f, k, e, m) { 
            if (!(d >= weapons.length || f >= weapons[d].length || 10 <= k)) { 
                if ("undefined" == typeof e || e >= mods[d].length) 
                    e = -1; 
                if ("undefined" == typeof m || m >= mods[d].length) 
                    m = -1; 
                weapon_loadout[c].type = d; 
                weapon_loadout[c].index = f; 
                weapon_loadout[c].ia = k; 
                weapon_loadout[c].mod_1_type = e; 
                weapon_loadout[c].mod_2_type = m
                if (get_weapon_type_priority(weapon_loadout[0]) < get_weapon_type_priority(weapon_loadout[1])) {
                    var temp = weapon_loadout[0];
                    weapon_loadout[0] = weapon_loadout[1];
                    weapon_loadout[1] = temp;
                }
            } 
        } 

        var sa = h.Ya, 
            equipment = h.Ya.eg, 
            power_types = h.b.type, 
            characters = h.Cb.Re, 
            races = h.Cb.Tb, 
            classes = h.Cb.Oh, 
            weapons = h.Ya.Df, 
            mods = h.Ya.nh, 
            weapon_type = h.Ya.D, 
            spec_patterns = [
                [0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 1, 0],
                [0, 0, 1, 1, 1],
                [0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 1, 0, 1, 1],
                [0, 1, 1, 0, 0],
                [0, 1, 1, 0, 1],
                [0, 1, 1, 1, 0],
                [0, 1, 1, 1, 1],
                [1, 0, 0, 0, 0],        
                [1, 0, 0, 0, 1],
                [1, 0, 0, 1, 0],
                [1, 0, 0, 1, 1],
                [1, 0, 1, 0, 0],
                [1, 0, 1, 0, 1],
                [1, 0, 1, 1, 0],
                [1, 0, 1, 1, 1],
                [1, 1, 0, 0, 0],
                [1, 1, 0, 0, 1],
                [1, 1, 0, 1, 0],
                [1, 1, 0, 1, 1],
                [1, 1, 1, 0, 0],
                [1, 1, 1, 0, 1],
                [1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1]
            ], 
            points_at_level = [2, 5, 8, 11, 14, 17, 20, 24, 28, 32, 36, 40, 45, 50, 55, 60, 66, 72, 78, 84], 
            cost_of_evolution = [1, 2, 3, 4, 4, 5, 5, 6, 6], 
            evolution_paths = [
                [0], 
                [0, 1], 
                [0, 1, 2], 
                [0, 1, 2, 3], 
                [0, 1, 2, 4], 
                [0, 1, 2, 3, 5], 
                [0, 1, 2, 3, 6], 
                [0, 1, 2, 3, 5, 7], 
                [0, 1, 2, 3, 5, 8], 
                [0, 1, 2, 3, 6, 7], 
                [0, 1, 2, 3, 6, 8], 
                [0, 1, 2, 4, 5], 
                [0, 1, 2, 4, 6], 
                [0, 1, 2, 4, 5, 7], 
                [0, 1, 2, 4, 5, 8], 
                [0, 1, 2, 4, 6, 7], 
                [0, 1, 2, 4, 6, 8]
            ], 
            base_shield_regen_delay = [3.5, 4, 4, 4.5], 
            armor_penalty = [15, 30, 50, 50]; 

        difficulty = { bronze: 0, silver: 1, gold: 2, platinum: 3 }; 
        d.Ab = { jb: 0, mb: 1, Hb: 2, Fa: 3 }; 
        d.Pa = { eb: 0, Jb: 1, ee: 2 }; 
        d.RC = { QC: 0, NC: 1 }; 
        d.lf = { rb: 0, Ww: 1 }; 
        d.aa = { ha: 0, xa: 1 };

        var is_toggled = [!1, !1, !1, !1, !1], 
            G = 0, 
            points_available = points_at_level[19],
            class_index = 0,
            character_index_in_class = -1, 
            equipment_type = [-1, -1, -1, -1], 
            equipment_level = [-1, -1, -1, -1], 
            character = null, 
            build = [], 
            weapon_loadout = [{ type: -1, index: -1, ia: -1, mod_1_type: -1, mod_1_level: -1, mod_2_type: -1, mod_2_level: -1 }, 
                              { type: -1, index: -1, ia: -1, mod_1_type: -1, mod_1_level: -1, mod_2_type: -1, mod_2_level: -1 }], 
            S = [[], [], [], [], []], 
            pa = [[], [], [], [], []];

                d.initialize = function () { 
                    c(window).on("hashchange", function () { y() }); 
                    ea() 
                };

                d.Ui = function (c) {
                    if (-1 == character_index_in_class || c >= character.powers.length || is_toggled[c]) return []; 
                    var d = []; 
                    if (character.mutually_exclusive && -1 != character.mutually_exclusive.indexOf(c)) 
                        for (var f = 0; f < character.mutually_exclusive.length; f++) { 
                            var k = character.mutually_exclusive[f]; 
                            is_toggled[k] && (is_toggled[k] = !1, d.push(k)) 
                        } 
                    is_toggled[c] = !0; 
                    y(); 
                    return d
                };

                d.Rm = function (c) { 
                    -1 == character_index_in_class || c >= character.powers.length || (is_toggled[c] = !1, y()) 
                };

                d.$m = function () { 
                    character_index_in_class = -1; 
                    d.Kh() 
                };
                
                d.sg = function (c, d, f) { 
                    if (build[c] && (d = build[c].indexOf(d), -1 != d)) { 
                        var k = 1; 
                        !0 == f && (k = build[c].length - d); 
                        d = build[c].splice(d, k); 
                        0 == build[c].length && (build[c] = null); 
                        for (c = 0; c < d.length; c++)
                            points_available += cost_of_evolution[d[c]]; 
                        !0 == f && y() 
                    } 
                };

                d.Zn = function (c) { 
                    G = c 
                };

                d.get_base_encumbrance = function () { 
                    return character.base_encumbrance 
                };

                d.equipment_type_at_index = function (c) { 
                    return equipment_type[c] 
                }; 

                d.equipment_level_at_index = function (c) { 
                    return equipment_level[c] 
                }; 

                d.Ob = function (c) {
                    return 3 >
                        c ? d.Pa.eb : 1 == c % 2 ? d.Pa.Jb : d.Pa.ee
                }; 

                d.Vo = function () { 
                    var c = e(["grenadeCapacity"]); 
                    d.evolved_grenade_power() && c.data.grenadeCapacity++; 
                    return { value: c.data.grenadeCapacity, C: c.C } 
                };

                d.get_damage_reduction = function () { 
                    var value = 0, C = [];
                    var c = e(["damageReduction"]);
                    value = c.data.damageReduction, C = c.C;
                    if (is_toggled[1]) {
                        if (character.powers[1] == h.b.rf) {
                            var d = get_special_DR(1, "siegeDR");
                            value += d.value;
                            C = C.concat(d.C);
                        }
                        if (character.powers[1] == h.b.nf) {
                            d = get_special_DR(1, "seekerSwarmDR");
                            value += d.value;
                            C = C.concat(d.C);
                        }
                    }
                    return { value: value, C: C } 
                }; 

                d.Wo = function () { 
                    var c = e(["durability"]); 
                    return { value: character.health * (1 + c.data.durability), C: c.C } 
                };

                d.Gg = function (d) {
                    d = c.extend({ ea: "health" }, d); 
                    var r = e("enemyDamageTaken globalDamage meleeDamage meleeDamageArmor meleeDamageBarrier meleeDamageShield modMeleeDamage arrows meleeHeavyBase omniShieldFire sabotageMelee".split(" ")), 
                    f = character.heavy_melee_modifiers, k = r.data.enemyDamageTaken,
                        t = 0, m = r.data.globalDamage + r.data.meleeDamage, g = r.data.meleeHeavyBase, I = 1; 
                    "armor" == d.ea ? I += r.data.meleeDamageArmor : "barrier" == d.ea ? I += r.data.meleeDamageBarrier : "shield" == d.ea && (I += r.data.meleeDamageShield); 
                    var F = character.light_melee_base_dmg, F = F * (1 + m) * (1 + r.data.modMeleeDamage) * (1 + k); 
                    "armor" == d.ea && r.data.omniShieldFire && (t = F); 
                    character.light_melee_modifiers && (F *= character.light_melee_modifiers[d.ea], f = character.light_melee_modifiers); 
                    var ba = 0 != g ? g : character.heavy_melee_base_dmg, n = character.heavy_melee_modifiers; 
                    0 != g && (f = n = { health: 1, armor: .75, barrier: 1, shield: 1 }); 
                    var q = 1; 
                    character.arrows && (q = r.data.arrows ? r.data.arrows : character.arrows); 
                    ba = ba * (1 + m) * (1 + r.data.modMeleeDamage) * (1 + k);
                    ba = ba * n[d.ea] * I; 
                    0 == g && (ba = (ba + t) * q, ba *= 1 + r.data.sabotageMelee); 
                    return { ui: F * I + t, ti: ba, C: r.C, i: f }
                }; 

                d.Hg = function () { 
                    return character.V ? character.V : character.name 
                }; 
                
                d.nd = function (c) { 
                    return "undefined" !== typeof c && c < character.powers.length ? character.powers[c] : character.powers 
                }; 
                
                d.Xo = function (c, d) {
                    var f = {
                        baseRechargeSpeed: A, 
                        omniShield: z, 
                        shieldBoost: O, 
                        bloodlustHOT: function () { return u(c, d, "bloodlustHealthRegen") }, 
                        decoyShield: function () { return u(c, d, "decoyShieldStrength") }, 
                        duration: function () { 
                            var res = u(c, d, "powerDuration", ["globalDuration"]);
                            if (character.powers[c].is_inferno_glitched && (equipment_type[3] == 5))
                                res.value *= 3/8;
                            return res;
                        }, 
                        force: function () { return u(c, d, "powerForce", ["globalPowerForce"]) }, 
                        hexShield: function () { return u(c, d, "hexShieldStrength", ["durability"]) }, 
                        incapacitate: function () { return u(c, d, "incapacitateDuration") }, 
                        meleeDrain: function () { return u(c, d, "meleeRestore") }, 
                        paralyze: function () { return u(c, d, "paralyzeDuration") }, 
                        petShield: function () { return u(c, d, "petShieldStrength") }, 
                        poison: function () { return u(c, d, "poisonDamage", ["globalPowerDamage"]) }, 
                        radius: function () { return u(c, d, "radiusPct") }, 
                        rageHOT: function () { return u(c, d, "rageHealthRegen") }, 
                        range: function () { return u(c, d, "rangePct") }, 
                        repairMatrix: function () { return u(c, d, "repairShields") }, 
                        shieldBoostRegen: function () { return u(c, d, "shieldBoostPower", ["shieldBoostPassive"]) }, 
                        stimpackShields: function () { return u(c, d, "stimpackShieldStrength") }, 
                        turretRestore: function () { return u(c, d, "turretRestorePct") }, 
                        ammoResupply: function () { return m(c, d, "ammoFrequency") }, 
                        grenadeResupply: function () { return m(c, d, "grenadeFrequency") }, 
                        missileRefire: function () { return m(c, d, "missileFrequency") },
                        siegeDR: function() { return get_special_DR(c, "siegeDR"); },
                        seekerSwarmDR: function() { return get_special_DR(c, "seekerSwarmDR"); }
                        // function m(c, d, f) {
                        //     var k = [], t = s(c); c = 0; 
                        //     t[f] && (c += t[f].value, k = t[f].C); d = t[d].value; 
                        //     return { value: d / (1 + c), C: k }
                        // } 
                    }, k = {}; 
                    if (f[d]) 
                        k = f[d](c); 
                    else {
                        for (var f = s(c), k = f[d].C, e = 0; e < k.length; e++)
                            if (0 == k[e].ia) { 
                                k.splice(e, 1); 
                                break 
                            } 
                        k = { value: f[d].value, C: k }
                    } 
                    return k
                };

                d.Ge = function (c, d, f) {
                    var k = {
                        ATTR_DMG: function () { 
                            return p(c, null, "powerDamage", !1, f) 
                        }, 
                        armor: function () { 
                            return p(c, d, "powerDamage", !1, f) 
                        }, 
                        bow: function () { 
                            return p(c, d, "powerDamage", !0, f) 
                        }, 
                        damage: function () { 
                            return p(c, d, "powerDamage", !1, f) 
                        }, 
                        dot: function () { 
                            return p(c, d, "powerDamage", !1, f) 
                        }, 
                        dsDOT: function () { 
                            return p(c, d, "dotDamage", !1, f) 
                        }, 
                        hammer: function () { 
                            return p(c, d, "powerDamage", !0, f) 
                        }, 
                        bladeDamage: g, 
                        overload: fa,
                        shadowstrike: ha, 
                        netAOE: Z, 
                        singularity: n
                        // , siegeDR: function() {
                        //     return 2137;
                        // }
                    }; 
                    return k[d] ? k[d](c, f) : null
                };

                d.get_points_available = function () { 
                    return points_available 
                };

                d.get_evolution_cost = function (c) { 
                    return cost_of_evolution[c] 
                };

                d.Jg = function (c, e) { 
                    var f = [], k = d.Ob(e); 
                    if (!d.Ie(c, e)) 
                        return []; 
                    for (var m = e - 1; 0 <= m; m--) { 
                        var g = d.Ob(m); 
                        if (g != d.Pa.Jb) { 
                            if (d.vb(c, m) || d.Pe(c, m)) 
                                break; 
                            f.push(k == d.Pa.Jb && g == d.Pa.ee ? m - 1 : m) 
                        } 
                    } 
                    return f 
                }; 
                
                d.MC = function (c) { 
                    return build[c] 
                }; 
                
                d.He = function () { 
                    return class_index 
                }; 
                
                d.$o = function () {
                    var c = e(["durability", "shieldStrength", "maxShield", "maxShieldStrength"]), 
                        d = character.barrier ? character.barrier : character.shield, 
                        d = d * (1 + c.data.durability + c.data.shieldStrength), 
                        d = d + c.data.maxShield * (1 + c.data.maxShieldStrength); 
                        return { value: d, C: c.C }
                }; 

                d.get_shield_recharge_rate = function () { 
                    var x; x = c.extend({ Hf: difficulty.gold }, x); x = base_shield_regen_delay[x.Hf]; 
                    var r = x - 1, f = e(["shieldRechargeRate"]); 
                    x *= 1 - f.data.shieldRechargeRate; 
                    r *= 1 - f.data.shieldRechargeRate; 
                    return { IC: r, HC: x, C: f.C } 
                };

                d.has_barrier = function () { 
                    return character.barrier ? d.lf.rb : d.lf.Ww 
                };

                d.ap = function () { 
                    return { d: "MP_" + classes[class_index] + ".png", index: character_index_in_class } 
                }; 

                d.Qa = function (d) { 
                    return c.extend({}, weapon_loadout[d]) 
                }; 

                d.bp = function (c) {
                    var d = e(["ammoCapacity", "magazineSize"], c), f = weapons[c.type][c.index], k = 0; 
                    0 != f.ammo_capacity_L && (k = f.ammo_capacity_L + (f.ammo_capacity_H - f.ammo_capacity_L) / 9 * c.ia, k *= 1 + d.data.ammoCapacity); 
                    var m = f.magazine; 
                    0 == f.ammo_capacity_L && (m = f.magazine + (f.ammo_capacity_H - f.magazine) / 9 * c.ia); 
                    m *= 1 + d.data.magazineSize; 
                    return { EC: Math.floor(k), GC: Math.floor(m) }
                };

                get_piercing_modifier = function(weapon_data) {
                    var weapon;
                    if (weapons[weapon_loadout[0].type][weapon_loadout[0].index].name == weapon_data.name)
                        weapon = weapon_loadout[0];
                    else
                        weapon = weapon_loadout[1];
                    if (weapon_data.native_piercing)
                        return 1;
                    var penalty = 1;
                    // console.log(weapon.mod_1_type)
                    if (weapon.mod_1_type != -1 && mods[weapon.type][weapon.mod_1_type].evolutions[weapon.mod_1_level].attributes.pierceDamage)
                        penalty = Math.min(penalty, mods[weapon.type][weapon.mod_1_type].evolutions[weapon.mod_1_level].attributes.pierceDamage);
                    if (weapon.mod_2_type != -1 && mods[weapon.type][weapon.mod_2_type].evolutions[weapon.mod_2_level].attributes.pierceDamage)
                        penalty = Math.min(penalty, mods[weapon.type][weapon.mod_2_type].evolutions[weapon.mod_2_level].attributes.pierceDamage);
                        // console.log(weapon);
                        // console.log("penalty: " + penalty)
                    if (penalty < 1)
                        return 1 - penalty;
                    if (equipment_type[3] == 0 || equipment_type[3] == 3)
                        return 1;
                    return 0;
                }

                d.get_piercing_modifier_wrapper = function(weapon_data) {
                    return get_piercing_modifier(weapon_data);
                }

                // has_piercing = function(weapon_data) {
                //     if (weapon_data.native_piercing)
                //         return true;
                //     if (equipment_type[3] == 0 || equipment_type[3] == 3)
                //         return true;
                //     // if (weapon.mod_1_type != -1 && mods[weapon.type][weapon.mod_1_type].evolutions[weapon.mod_1_level].attributes.pierceDamage)
                //     //     return true;
                //     // if (weapon.mod_2_type != -1 && mods[weapon.type][weapon.mod_2_type].evolutions[weapon.mod_2_level].attributes.pierceDamage)
                //     //     return true;
                //     return false;
                //     // return true;
                // }
                
                // d.has_piercing_wrapper = function(weapon) {
                //     return has_piercing(weapon);
                // }

                // x - weapon
                d.Ec = function (x, m, f) {
                    var x0 = x;
                    // k - list of relevant bonuses
                    var k = "ammoArmorWeakening ammoDamage enemyArmorPenetration enemyArmorWeakening enemyDamageTaken enemyWeaponDamageTaken globalDamage headshot headshotMod weaponDamage".split(" "),
                    // g - weapon data
                    g = weapons[x.type][x.index], n = []; 
                    // preparing k
                    n[weapon_type.assault] = "weaponDamageAssault"; 
                    n[weapon_type.pistol] = "weaponDamagePistol"; 
                    n[weapon_type.shotgun] = "weaponDamageShotgun"; 
                    n[weapon_type.smg] = "weaponDamageSMG";
                    n[weapon_type.sniper] = "weaponDamageSniper"; 
                    k.push(n[g.type]); 
                    g.race == races.Ua && character.race == races.Ua && k.push("gethWeaponDamage"); 
                    g.race == races.Sb && character.race == races.Sb && k.push("protheanWeaponDamage"); 
                    g.type == weapon_type.assault && k.push("tcDamageAssault"); 
                    g.type == weapon_type.shotgun && k.push("tcDamageShotgun"); 
                    g.type == weapon_type.sniper && k.push("tcDamageSniper"); 
                    // 
                    var q = null; 
                    !S[x.type][x.index] || f ? (q = e(k, x), S[x.type][x.index] = q, pa[x.type][x.index] = q.C) : q = S[x.type][x.index]; 

                    m = c.extend({ gb: !1, Hf: difficulty.gold, ea: "health", target: "organic", type: "normal", piercing: false }, m); 
                    var k = 1 - q.data.enemyArmorPenetration, I = 1 - q.data.enemyArmorWeakening;
                    f = q.data.enemyDamageTaken + q.data.enemyWeaponDamageTaken; 
                    var F = q.data.headshotMod, 
                        ba = 1, 
                        ra = q.data.weaponDamage + q.data.globalDamage, 
                        y = 0, 
                        sa = q.data.headshot; 

                    q.data.gethWeaponDamage && (y += q.data.gethWeaponDamage); 
                    q.data.protheanWeaponDamage && (y += q.data.protheanWeaponDamage); 
                    q.data.tcDamageAssault && (y += q.data.tcDamageAssault); 
                    q.data.tcDamageShotgun && (y += q.data.tcDamageShotgun); 
                    q.data.tcDamageSniper && (y += q.data.tcDamageSniper); 
                    q.data.ammoArmorWeakening && (I *= 1 - q.data.ammoArmorWeakening); 

                    g.upfront && (ba = g.upfront); 
                    ra += q.data[n[g.type]]; 
                    x = g.damage_L + (g.damage_H - g.damage_L) / 9 * x.ia; 
                    "ammo" != m.type && !m.gb && g.uncharged_modifier && (x *= g.uncharged_modifier); 
                    m.gb && g.charged && (n = g.charged_shots ? g.charged_shots : 1, "ammo" == m.type && g.is_venom && n++, "ammo" != m.type || "ammo" == m.type && g.charged_ammo) && (x = x * g.charged_damage * n); 
                    x *= 1 + y; 
                    n = g.upfront ? x * (1 - ba) : 0; 
                    if ("ammo" == m.type) { 
                        k = d.equipment_type_at_index(d.Ab.Fa); 
                        f = d.equipment_level_at_index(d.Ab.Fa); 
                        if (-1 == k) 
                            return 0; 
                        q = x * q.data.ammoDamage * (1 + q.data.enemyDamageTaken); 
                        k = equipment[d.Ab.Fa][k]; 
                        g.burst && (q *= Math.floor(g.burst)); 
                        k.evolutions[f].Zc && q > k.evolutions[f].Zc && (q = k.evolutions[f].Zc);
                        if (equipment_type[3] == 7 && has_biotic_primer_active())
                            q *= 1 + (equipment_level[3] + 1) * 0.25;
                        if (equipment_type[3] == 5 && (index = has_fire_dot_active()) != -1) {
                            F = s(index), I = 1;
                            if (m.ea == "armor" && F.powerDamageArmor)
                                I += F.powerDamageArmor.value;
                            if (m.ea == "shield" && F.powerDamageShield)
                                I += F.powerDamageShield.value;
                            if (m.ea == "barrier" && F.powerDamageBarrier)
                                I += F.powerDamageBarrier.value;
                            if (character.powers[index].i)
                                q *= character.powers[index].i[m.ea];
                            q *= I;
                        } else q *= k.i[m.ea];
                        if (m.piercing)
                            q *= get_piercing_modifier(weapons[x0.type][x0.index]);
                        return Math.round(q) 
                    }
                    q = 1 + ra; 
                    ra = g.headshot_modifier ? g.headshot_modifier : 2.5;
                    "headshot" == m.type && !1 !== g.headshot_capable ? (ra *= 1 + F, q += sa) : "Boss HS" == m.type && !1 !== g.headshot_capable ? (ra = 1.4, q += sa) : ra = 1;
                    F = x * ba * q * (ra + f); 
                    "armor" == m.ea && !1 !== g.armor_penalty && (
                        k *= I, 
                        0 > k && 
                            (k = 0), 
                        F -= armor_penalty[m.Hf] * k, 
                        5 > F && 
                        (F = 5)
                    ); 
                    F *= g.i[m.target][m.ea]; 
                    g.burst && (F *= g.burst); 
                    F += n * (ra + f); 
                    m.gb && g.is_venom && (F += q * (g.charged_shots + 1));
                    if (m.piercing)
                        F *= get_piercing_modifier(weapons[x0.type][x0.index]);
                    return Math.round(F)
                };

                d.cp = function (c) { 
                    return pa[c.type][c.index] || [] 
                };

                d.Fc = function (c) { 
                    var d = weapons[c.type][c.index]; 
                    return d.weight_L + (d.weight_H - d.weight_L) / 9 * c.ia 
                }; 

                // Outdated knowledge
                // https://files.catbox.moe/5cb869.jpg
                // var weight_glitch_matrix = [
                //     [true,  true,  false, true, true,  true,  true, true],
                //     [true,  true,  true,  true, true,  true,  true, true],
                //     [false, false, false, true, false, false, true, true],
                //     [false, false, true,  true, false, false, true, true],
                //     [true,  true,  false, true, true,  true,  true, true],
                //     [true,  true,  true,  true, true,  true,  true, true],
                //     [true,  true,  true,  true, true,  true,  true, true],
                //     [false, false, true,  true, false, false, true, true],
                //     [true,  true,  false, true, true,  true,  true, true]
                // ];

                // d.get_weapon_type_priority = function(weapon) {
                function get_weapon_type_priority(weapon) {
                    switch (weapon.type) {
                        case -1: return -1;
                        case 0: return 4;
                        case 1: return 0;
                        case 2: return 3;
                        case 3: return 1;
                        case 4: return 2;
                    }
                }

                // d.is_dlc = function(weapon) {
                function is_dlc(weapon) {
                    if (weapons[weapon.type][weapon.index].dlc)
                        return true;
                    return false;
                }

                // d.has_heavy_mod = function(weapon) {
                function has_heavy_mod(weapon) {
                    if (weapon.mod_1_type != -1)
                        if (mods[weapon.type][weapon.mod_1_type].heavy)
                        return true
                    if (weapon.mod_2_type != -1)
                        if (mods[weapon.type][weapon.mod_2_type].heavy)
                            return true;
                    return false;
                }

                // d.has_light_mod = function(weapon) {
                function has_light_mod(weapon) {
                    if (weapon.mod_1_type != -1)
                        if (mods[weapon.type][weapon.mod_1_type].light)
                        return true
                    if (weapon.mod_2_type != -1)
                        if (mods[weapon.type][weapon.mod_2_type].light)
                            return true;
                    return false;
                }

                // d.get_mod_loadout_class = function(weapon) {
                // function get_mod_loadout_class(weapon) {
                //     // return 0;
                //     if (weapon.type == -1)
                //         return 8;
                //     var res = 0;
                //     if (is_dlc(weapon))
                //         res += 4;
                //     if (has_heavy_mod(weapon))
                //         res += 2;
                //     if (has_light_mod(weapon))
                //         res += 1;
                //     return res;
                // }

                // https://files.catbox.moe/zic6ce.png
                function get_one_weapon_weight_glitch(weapon) {
                    // return true;
                    if (is_dlc(weapon)) {
                        if (weapon.mod_1_type != -1 && mods[weapon.type][weapon.mod_1_type].light)
                            return false;
                        else
                            return true;
                    } else {
                        if (weapon.mod_2_type != -1 && mods[weapon.type][weapon.mod_2_type].light)
                            return true;
                        else
                            return false;
                    }
                }

                // https://files.catbox.moe/t8xec7.png
                function get_weight_glitch() {
                    var primary = weapon_loadout[0], secondary = weapon_loadout[1];
                    if (secondary.type == -1)
                        return [get_one_weapon_weight_glitch(primary), false];
                    
                    if (has_light_mod(secondary)) {
                        if (secondary.mod_2_type != -1 && mods[secondary.type][secondary.mod_2_type].heavy)
                            return [true, false];
                        else
                            return [true, true];
                    } else {
                        if (has_heavy_mod(secondary)) {
                            if (is_dlc(secondary))
                                return [get_one_weapon_weight_glitch(primary), true];
                            else
                                return [get_one_weapon_weight_glitch(primary), false];
                        } else {
                            return [get_one_weapon_weight_glitch(primary), false];
                        }
                    }
                }

                d.www = function() {
                    return get_weight_glitch();
                }

                d.Kg = function () {
                    var weight_applying = get_weight_glitch();
                    var c = ["encumbrance", "weaponWeight"], m = []; 
                    m[weapon_type.assault] = "weaponWeightAssault"; 
                    m[weapon_type.pistol] = "weaponWeightPistol"; 
                    m[weapon_type.shotgun] = "weaponWeightShotgun"; 
                    m[weapon_type.smg] = "weaponWeightSMG"; 
                    m[weapon_type.sniper] = "weaponWeightSniper";
                    var f = []; 
                    f[weapon_type.assault] = "modWeightAssault"; 
                    f[weapon_type.pistol] = "modWeightPistol"; 
                    f[weapon_type.shotgun] = "modWeightShotgun"; 
                    f[weapon_type.smg] = "modWeightSMG"; 
                    f[weapon_type.sniper] = "modWeightSniper"; 
                    var k = []; 
                    k[weapon_type.assault] = "modULMAssault"; 
                    k[weapon_type.pistol] = "modULMPistol"; 
                    k[weapon_type.shotgun] = "modULMShotgun"; 
                    k[weapon_type.smg] = "modULMSMG"; 
                    k[weapon_type.sniper] = "modULMSniper"; 
                    c.push(m[weapon_loadout[0].type]); 
                    c.push(f[weapon_loadout[0].type]); 
                    c.push(k[weapon_loadout[0].type]);
                    // console.log(weapon_loadout[0].type);
                    -1 != weapon_loadout[1].type && (c.push(m[weapon_loadout[1].type]), c.push(f[weapon_loadout[1].type]), c.push(k[weapon_loadout[1].type]));

                    var c = e(c, weapon_loadout[0], { Jf: weapon_loadout[1] }), 
                        g = 2 + character.base_encumbrance;
                        g = g + c.data.encumbrance / 100;
                    var q = d.Qa(0), 
                        n = d.Fc(q);
                    if (weight_applying[0])     
                        n = n - c.data[f[q.type]];
                        n = n * (1 - c.data[k[q.type]]);
                        n = n - c.data.weaponWeight - c.data[m[q.type]];
                        g = g - n;
                        q = d.Qa(1); 
                    if (-1 != q.type) {
                        n = d.Fc(q); 
                        if (weight_applying[1]) n -= c.data[f[q.type]];
                        n *= 1 - c.data[k[q.type]];
                        n = n - c.data.weaponWeight - c.data[m[q.type]], g -= n
                    }
                    -2 > g ? g = -2 : 2 < g && (g = 2); 
                    return { value: g, C: c.C }
                }; 

                d.Ie = function (c, e) { 
                    var f = points_available - cost_of_evolution[e]; 
                    if (0 > f) 
                        return !1; 
                    for (var k = e - 1; 0 <= k; k--) { 
                        var m = d.Ob(k); 
                        m != d.Pa.Jb && (m != d.Pa.eb ? d.vb(c, k) || d.vb(c, k - 1) || (f -= cost_of_evolution[k]) : d.vb(c, k) || (f -= cost_of_evolution[k])) 
                    } 
                    return 0 <= f 
                };

                d.dh = function (c) {
                    return -1 != "armor bow damage dot dsDOT hammer overload shadowstrike".split(" ").indexOf(c)
                }; 

                d.evolved_grenade_power = function () { 
                    for (var c = 0; c < character.powers.length; c++)
                        if (character.powers[c].is_grenade_power && build[c]) 
                            return !0; 
                    return !1 
                };

                d.character_is_chosen = function () { 
                    return -1 != character_index_in_class 
                };

                d.fh = function (c) { 
                    return -1 == character_index_in_class || c >= character.powers.length ? !1 : is_toggled[c] 
                };

                d.vb = function (c, d) { 
                    return build[c] ? 0 <= build[c].indexOf(d) : !1 
                }; 
                
                d.gh = function (c, e, f) { 
                    return !0 == f && d.Pe(c, e) ? !0 : d.Ie(c, e) 
                }; 
                
                d.Pe = function (c, e) { 
                    var f = d.Ob(e); 
                    return d.vb(c, e) || f == d.Pa.eb ? !1 : d.vb(c, f == d.Pa.Jb ? e + 1 : e - 1) 
                }; 

                d.Sq = function (c, d) {
                    return -1 == weapon_loadout[c].type || d > mods[weapon_loadout[c].type].length ? !1 : weapon_loadout[c].mod_1_type == d || weapon_loadout[c].mod_2_type == d
                }; 

                d.PC = function (c, d) { 
                    return -1 == weapon_loadout[c].type ? !1 : -1 == (0 == d ? weapon_loadout[c].mod_1_type : weapon_loadout[c].mod_2_type) 
                }; 

                d.ud = function (c, d, f) { 
                    if (-1 == weapon_loadout[c].type || f > mods[weapon_loadout[c].type].length) 
                        return !1; 
                    d = 0 == d ? weapon_loadout[c].mod_2_type : weapon_loadout[c].mod_1_type; 
                    return -1 == d ? !1 : mods[weapon_loadout[c].type][f].R == mods[weapon_loadout[c].type][d].R ? !0 : !1 
                };

                d.hh = function (c) { 
                    return G == c 
                };

                d.Dv = function (c, d) { 
                    -1 != weapon_loadout[c].type && (0 == d ? (weapon_loadout[c].mod_1_type = -1, weapon_loadout[c].mod_1_level = -1) : (weapon_loadout[c].mod_2_type = -1, weapon_loadout[c].mod_2_level = -1), y()) 
                }; 

                d.Iv = function (c) { 
                    equipment_type[c] = -1; equipment_level[c] = -1; 
                    y() 
                }; 
                d.Kh = function () { 
                    is_toggled = [!1, !1, !1, !1, !1]; 
                    build = []; 
                    points_available = points_at_level[19]; 
                    y() 
                }; 

                d.Jv = function (e) {
                    e == 0 && (weapon_loadout[0] = c.extend({}, weapon_loadout[1])); 
                    weapon_loadout[1] = { ia: -1, type: -1, index: -1, mod_1_type: -1, mod_1_level: -1, mod_2_type: -1, mod_2_level: -1 }; 
                    G = 0; 
                    y()
                }; 

                d.Dw = function (c, e) { 
                    if (!d.vb(c, e) && d.gh(c, e)) { 
                        for (var f = d.Jg(c, e), k = f.length - 1; 0 <= k; k--)
                            build[c] ? build[c].push(f[k]) : build[c] = [f[k]], points_available -= cost_of_evolution[f[k]]; 
                        if (build[c]) 
                            for (k = 0; k <= build[c].length; k++) { 
                                if (k == build[c].length) { 
                                    build[c].push(e); 
                                    break 
                                } 
                                if (e < build[c][k]) { 
                                    build[c].splice(k, 0, e); 
                                    break 
                                } 
                            } 
                        else 
                            build[c] = [e]; 
                        points_available -= cost_of_evolution[e]; 
                        y() 
                    } 
                }; 

                d.change_equipment = function (c, d, f) { 
                    d < equipment[c].length && f < equipment[c][d].evolutions.length && (equipment_type[c] = d, equipment_level[c] = f, y()) 
                }; 

                d.Kw = function (c, d) {
                    -1 != equipment_type[c] && d < equipment[c][equipment_type[c]].evolutions.length && (equipment_level[c] = d, y())
                }; 

                d.Lw = function (c, d) { 
                    da(c, d); 
                    y() 
                }; 

                d.Mw = function (c) { 
                    c < classes.length && (class_index = c); 
                    y() 
                }; 

                d.Nw = function (c, d, f, e) { 
                    var m = weapon_loadout[c].mod_1_type, g = weapon_loadout[c].mod_2_type; 
                    weapon_loadout[c].type != d && (g = m = -1); 
                    equip_weapon(c, d, f, e, m, g); 
                    y() 
                }; 

                d.Ow = function (c, e, f, k) { 
                    var m = weapon_loadout[c].type; 
                    -1 == m || f > mods[m].length || k > sa.Qb || d.ud(c, e, f) || (0 == e ? (weapon_loadout[c].mod_1_type = f, weapon_loadout[c].mod_1_level = k) : (weapon_loadout[c].mod_2_type = f, weapon_loadout[c].mod_2_level = k), y()) 
                }; 

                d.Pw = function (c, d, f) { 
                    if (!(-1 == weapon_loadout[c].type || f > sa.Qb)) { 
                        if (0 == d) { 
                            if (-1 == weapon_loadout[c].mod_1_type) 
                                return; 
                            weapon_loadout[c].mod_1_level = f 
                        } else { 
                            if (-1 == weapon_loadout[c].mod_2_type) 
                                return; 
                            weapon_loadout[c].mod_2_level = f 
                        } 
                        y() 
                    } 
                }; 

                d.Qw = function (c, d) { 
                    weapon_loadout[c].ia = d; 
                    y() 
                };

                d.has_grenade_power = function () {
                    for (var c = 0; c < character.powers.length; c++)
                        if (!0 == character.powers[c].is_grenade_power) 
                            return !0; 
                    return !1
                }

                d.has_DR_power = function () {
                    for (var c = 0; c < character.powers.length; c++)
                        if (character.powers[c].h.indexOf("damageReduction") != -1
                            || character.powers[c].h.indexOf("siegeDR") != -1
                            || character.powers[c].h.indexOf("seekerSwarmDR") != -1
                            || character.powers[c].h.indexOf("RMDR") != -1)
                            return true;
                    return false;
                }

                function has_cryo_active() {
                    if (equipment_type[3] == 1)
                        return true;
                    for (var i = 0; i < 3; ++i)
                        if (is_toggled[i] && build[i] && build[i].length > 0 && character.powers[i].cryo)
                            return true;
                    return false;
                }

                function get_cryo_bonus(i) {
                    if (build[i])
                        for (var j = 0; j < build[i].length; ++j)
                            if (character.powers[i].evolutions[build[i][j]].attributes.freezeDamage)
                                // return 2;
                                return 1 + character.powers[i].evolutions[build[i][j]].attributes.freezeDamage;
                    return 1;
                }

    })(h.Xa = h.Xa || {}, jQuery191);
    /*
     Copyright 2013
    */
    var R = R || {}; 
    jQuery191(function () { R.Image.initialize({ src: Core.mediaUrl + "images/loading.png" }) });
    
    (function (d, c) {
        function e(d) { return !c(d).data("loaded") } function P() { for (var d = 0; d < this.ad.length; d++)c(this.ad[d].object).off(this.ad[d].FC); this.ad = []; for (d = 0; d < this.images.length; d++) { var z = this.images[d], K = z.attr("ui-image-src"); if (!K) return; z.removeAttr("ui-image-src").removeClass("ui-image-deferred"); z.attr("src", K).show(); z.data("loaded", !0) } this.images = c.grep(this.images, e) } var s = {}, K = {}; d.initialize = function (e) { K = c.extend({ src: "" }, e); d.kg("default") }; d.qb = function (d, e, K) {
            s[d] && (c(K).on(e,
                function () { c(s[d]).trigger("appear.UI.Image") }), s[d].ad.push({ FC: e, object: K }))
        }; d.kg = function (d) { s[d] || (s[d] = { images: [], timeout: -1, ad: [] }, c(s[d]).on("appear.UI.Image", P)) }; d.Lb = function (e, z, fa, u) { e = c("<img>").addClass("ui-image-deferred").attr("width", z).attr("height", fa).attr("ui-image-src", e).data("loaded", !1); u || (u = "default"); s[u] || d.kg(u); K.src && e.attr("src", K.src); s[u].images.push(e); return e }; d.UC = function (c) { s[c] && -1 != s[c].timeout && clearTimeout(s[c].timeout) }
    })(R.Image = R.Image || {}, jQuery191);
    /*
     Copyright 2013
    */
    R = R || {}; (function (d, c) { var e = 0; d.Ll = function (d) { var s; s = c.extend({ id: "ui-input-" + e++ }, s); var K = c('<input type="checkbox">').attr("id", s.id).addClass("ui-input-checkbox"); s = c("<label>").addClass("ui-input-label").attr("for", s.id).append(c("<span>").addClass("ui-check")).append(c("<span>").addClass("ui-check-label").text("")); d.append(K, s); return K } })(R.bh = R.bh || {}, jQuery191);
    /*
     Copyright 2013
    */
    R = R || {};
    (function (d, c) {

        d.ba = function (e) { 
            c(e).addClass("ui-tabs"); 
            c("ol,ul", e).filter(":first").addClass("ui-tabs-nav"); 
            c(e).children("div").addClass("ui-tabs-panel"); 
            c(e).append(c("<div>").addClass("clearfix")); 
            c(".ui-tabs-nav li > a").click(function () { 
                                                if (c(this).parent().hasClass("ui-tabs-active")) 
                                                    return !1; 
                                                var P = c(this).attr("href"); 
                                                d.Cw(e, P); 
                                                return !1 
                                            }); 
            return e 
        }; 
        
        d.Cw = function (d, P) {
            var s = c("ol,ul", d).filter(":first"); 
            c("ol li,ul li", d).removeClass("ui-tabs-active"); 
            c('a[href="' + P + '"]', s).parent().addClass("ui-tabs-active"); 
            c(".ui-tabs-panel", d).hide(); c(P, d).show().trigger("UI.Tabs.selected").trigger("UI.Tabs.paint")
        }

    })(R.$h = R.$h || {}, jQuery191);
    /*
     Copyright 2013
    */
    R = R || {}; jQuery191(function () { R.Tc.initialize() });
    (function (d, c) {
        function e(d, e, g, n, p) { 
            d = c(window).scrollTop(); 
            var D = c(window).scrollLeft(), 
                z = c(window).width(), 
                u = c(window).height(), 
                y = D - e, 
                ea = e + n - (D + z); 
                n > z ? e = 0 < y && 0 >= ea ? e + (y - (e + y + n - z - D)) : 0 < ea && 0 >= y ? D : y > ea ? D + z - n : D : 0 < y ? e += y : 0 < ea && (e -= ea); n = d - g; 
                D = g + p - (d + u); p > u ? g = 0 < n && 0 >= D ? g + (n - (g + n + p - u - d)) : 0 < D && 0 >= n ? d : n > D ? d + u - p : d : 0 < n ? g += n : 0 < D && (g -= D); 
                return { x: e, y: g } 
        } 
        
        function P() { 
            var d = c(window).scrollLeft(), 
                e = c(window).scrollTop(); 
            p.css("left", d).css("top", e).hide() 
        } 
        
        function s(c, d) { 
            p.css("left", c + "px").css("top", d + "px").show() 
        }

        function K() { 
            var e = c(this), 
                g = e.attr("ui-tooltip-data"), 
                p = e.data("ui-tooltip-options"); 
            g && d.Th(e, g, p) 
        } 
        
        function g() { 
            var e = c(this), 
                g = e.attr("ui-tooltip-data"), 
                p = e.data("ui-tooltip-options"); 
            g && d.Th(e, g, p) 
        } 
        
        function z(c, d, e) { 
            "string" === typeof d ? A.html(d) : A.empty().append(d); 
            d = p.outerWidth(); var g = p.outerHeight(); 
            c = fa[e.location](c, d, g); 
            "mouse" != e.location && s(c.x, c.y) 
        } 
        
        var fa = {
            bottomCenter: function (c, d, g) { var n = c.offset(), p = n.left + (c.outerWidth() / 2 - d / 2); c = n.top + c.outerHeight() + 5; return e(0, p, c, d, g) }, 
            bottomLeft: function (c, d, g) { var n = c.offset(), p = n.left - d; c = n.top + c.outerHeight(); return e(0, p, c, d, g) }, 
            bottomRight: function (c, d, g) { var n = c.offset(), p = n.left + c.outerWidth(); c = n.top + c.outerHeight(); return e(0, p, c, d, g) }, 
            leftCenter: function (c, d, g) { var n = c.offset(), p = n.left - d; c = n.top + c.outerHeight() / 2 - g / 2; return e(0, p, c, d, g) }, 
            rightCenter: function (c, d, g) { var n = c.offset(), p = n.left + c.outerWidth(); c = n.top + c.outerHeight() / 2 - g / 2; return e(0, p, c, d, g) }, 
            topLeft: function (c, d, g) { c = c.offset(); return e(0, c.left - d, c.top - g, d, g) }, 
            topRight: function (c, d, g) { var n = c.offset(); c = n.left + c.outerWidth(); return e(0, c, n.top - g, d, g) }, 
            mouse: function (d, g, p) { d.off("mousemove.UI.Tooltip"); d.on("mousemove.UI.Tooltip", function (d) { d = e(c(this), d.pageX + 15, d.pageY + 15, g, p); s(d.x, d.y) }) }
        }, 
        u = Date.now(), 
        p = null, 
        A = null; 
        
        d.initialize = function () {
            p = c("<div>").addClass("ui-tooltip").hide().appendTo("body"); 
            A = c("<div>").addClass("ui-tooltip-content").appendTo(p); 
            p.mouseleave(function () { P() }); 
            c(document).off("mouseover.UI.Tooltip", "[ui-tooltip-data]", K); 
            c(document).on("mouseover.UI.Tooltip", "[ui-tooltip-data]", K); 
            c(document).off("touchend.UI.Tooltip", "[ui-tooltip-data]", g); 
            c(document).on("touchend.UI.Tooltip", "[ui-tooltip-data]", g)
        }; 
        
        d.ba = function (d, e, g) { 
            var n = (u++).toString(), n = n.substr(n.length - 6); 
            d.attr("ui-tooltip-data", "#tooltip-" + n); 
            g && d.data("ui-tooltip-options", g); 
            "object" === typeof e ? d.after(c("<div>").attr("id", "tooltip-" + n).append(e).hide()) : d.after(c("<div>").attr("id", "tooltip-" + n).html(e).hide()) 
        }; 
        
        d.Aa = function (d) {
            var e = d.attr("ui-tooltip-data"); "string" === typeof e && ("#" == e.substr(0, 1) && c(e).remove(), d.removeAttr("ui-tooltip-data")); 
            d.off("mouseover.UI.Tooltip mousemove.UI.Tooltip")
        }; 
        
        d.Th = function (d, e, g) { 
            d = c(d); 
            g = c.extend({ location: "A" == d.prop("tagName") ? "mouse" : "bottomLeft" }, g); 
            d.mouseout(function (d) { c.contains(p[0], d.relatedTarget) || P() }); 
            "object" === typeof e ? z(d, e, g) : "string" === typeof e && ("#" == e.substr(0, 1) ? z(d, c(e).html(), g) : z(d, e, g)) 
        }
        
    })(R.Tc = R.Tc || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires locale.en.js
    */
    var V = V || {};
    (function (d, c) {
        function percent_format(c) { 
            return 100 * c 
        } 

        var default_format = { name: "[MISSING NAME]", j: "%", format: percent_format }, 
        parameter_value_formats = {
            ATTR_DMG: { name: "", j: "", $d: !0 }, 
            ATTR_INT: { name: "", j: "" }, 
            ATTR_PCT: { name: "", j: "%", format: percent_format }, 
            ATTR_TIME: { name: "", j: a.xb }, 
            AMMO_INT: { name: "", j: "", precision: 1 }, 
            AMMO_TIME: { name: "", j: a.xb, precision: 1 }, 
            accuracy: { name: a.Kf, j: "%", format: percent_format }, 
            ammoArmorWeakening: { name: a.fi, j: "%", format: percent_format }, 
            ammoDamage: { name: a.CA, j: "%", format: percent_format }, 
            ammoResupply: { name: a.nj, j: a.xb }, 
            areaTargetBonus: { name: "", j: "" }, 
            armor: { name: "", j: "" }, 
            arrows: { name: "", j: "" },
            arrowCount: { name: a.Jj, j: "" }, 
            ascensionDuration: { name: "", j: "" }, 
            baseRechargeSpeed: { name: a.k, j: a.xb }, 
            bioticDamage: { name: a.bg, j: "%", format: percent_format }, 
            bioticOrbs: { name: "", j: "" }, 
            bladeDamage: { name: "", j: "", $d: !0 }, 
            bloodlustHOT: { name: a.pd, j: "" }, 
            bonusGrenade: { name: a.yl, j: "" }, 
            bow: { name: a.l, j: "" }, 
            cobraCapacity: { name: "", j: "" }, 
            damage: { name: a.l, j: "" }, 
            damageReduction: { name: a.xc, j: "%", format: percent_format }, 
            decoyShield: { name: a.Xm, j: "" }, 
            dot: { name: a.pg, j: "" }, 
            dsDOT: { name: a.pg, j: "" }, 
            durability: { name: a.Zp, j: "%", format: percent_format }, 
            duration: { name: a.W, j: a.xb }, 
            encumbrance: { name: a.DC, j: "" }, 
            enemyArmorPenetration: { name: a.EA, j: "%", format: percent_format }, 
            enemyArmorWeakening: { name: a.fi, j: "%", format: percent_format }, 
            enemyDamageTaken: { name: a.Fm, j: "%", format: percent_format }, 
            enemyMovementSpeed: { name: a.Pn, j: "%", format: percent_format }, 
            force: { name: a.Ee, j: a.IB }, 
            globalDamage: { name: a.pe, j: "%", format: percent_format }, 
            globalDuration: { name: a.W, j: "%", format: percent_format }, 
            globalPowerDamage: { name: a.J, j: "%", format: percent_format }, 
            globalRecharge: { name: a.k, j: "%", format: percent_format }, 
            grenadeCapacity: { name: a.La, j: "" }, 
            grenadeResupply: { name: a.Dp, j: a.xb }, 
            hammer: { name: a.l, j: "" },
            hammerCharges: { name: a.Cd, j: "" }, 
            headshot: { name: a.ca, j: "%", format: percent_format }, 
            headshotMod: { name: a.ca, j: "%", format: percent_format }, 
            hexShield: { name: a.Od, j: "" }, 
            incapacitate: { name: a.Eq, j: a.xb }, 
            maxShield: { name: "", j: "" }, 
            medigelCapacity: { name: "", j: "" }, 
            meleeDamage: { name: a.P, j: "%", format: percent_format }, 
            meleeDrain: { name: a.Sh, j: "" }, 
            meleeHeavyBase: { name: a.aB, j: "" }, 
            missileRefire: { name: a.Ls, j: a.xb }, 
            modMeleeDamage: { name: a.gB, j: "%", format: percent_format }, 
            modWeightAssault: { name: a.gi, j: "%", format: percent_format }, 
            modWeightPistol: { name: a.ii, j: "%", format: percent_format }, 
            modWeightShotgun: { name: a.mi, j: "%", format: percent_format }, 
            modWeightSMG: { name: a.ki, j: "%", format: percent_format }, 
            modWeightSniper: { name: a.ni, j: "%", format: percent_format }, 
            modULMAssault: { name: a.gi, j: "%", format: percent_format }, 
            modULMPistol: { name: a.ii, j: "%", format: percent_format }, 
            modULMShotgun: { name: a.mi, j: "%", format: percent_format }, 
            modULMSMG: { name: a.ki, j: "%", format: percent_format }, 
            modULMSniper: { name: a.ni, j: "%", format: percent_format }, 
            movementSpeed: { name: a.jc, j: "%", format: percent_format }, 
            netAOE: { name: "", j: "", $d: !0 }, 
            omniShield: { name: a.Et, j: "" }, 
            opsPackCapacity: { name: "", j: "" }, 
            overload: { name: a.l, j: "" }, 
            paralyze: { name: a.Nt, j: a.xb }, 
            penetration: { name: "", j: "", precision: 2 }, 
            petShield: { name: "", j: "" }, 
            poison: { name: a.uu, j: "" }, 
            radius: { name: a.Y, j: a.oi }, 
            range: { name: a.Range, j: a.oi }, 
            rageDR: { name: a.pv, j: "%", format: percent_format },
            RMDR: { name: "Damage Reduction", j: "%", format: percent_format },
            rageDuration: { name: "", j: "" }, 
            rageHOT: { name: a.qv, j: "" }, 
            rageMeleeDamage: { name: a.rv, j: "%", format: percent_format }, 
            repairMatrix: { name: a.Sh, j: "" }, 
            seekerSwarm: { name: "", j: "" }, 
            seekerSwarmDR: { name: a.xc, j: "%", format: percent_format },
            shadowstrike: { name: a.l, j: "" }, 
            shieldBoost: { name: a.Qq, j: "" }, 
            shieldBoostRegen: { name: a.vx, j: "" }, 
            shieldRechargeRate: { name: a.Ha, j: "%", format: percent_format }, 
            shieldStrength: { name: a.Od, j: "%", format: percent_format }, 
            siegeCharge: { name: a.Cd, j: "" },
            siegeDR: { name: a.xc, j: "%", format: percent_format },
            singularity: { name: "", j: "", $d: !0 }, 
            stability: { name: a.Ff, j: "%", format: percent_format }, 
            stimpackShields: { name: a.zd, j: "" }, 
            techDamage: { name: a.jA, j: "%", format: percent_format }, 
            thermalCapacity: { name: "", j: "" }, 
            turretRestore: { name: a.mj, j: "" }, 
            weaponDamage: { name: a.n, j: "%", format: percent_format }, 
            weaponDamageAssault: { name: a.GA, j: "%", format: percent_format }, 
            weaponDamagePistol: { name: a.kB, j: "%", format: percent_format }, 
            weaponDamageShotgun: { name: a.AB, j: "%", format: percent_format }, 
            weaponDamageSMG: { name: a.rB, j: "%", format: percent_format }, 
            weaponDamageSniper: { name: a.EB, j: "%", format: percent_format }, 
            weaponROF: { name: a.hf, j: "%", format: percent_format }
        }; 
        
        d.evolution_codes = "1 2 3 4A 4B 5A 5B 6A 6B".split(" "); 
        d.rank_codes = "I II III IV V VI VII VIII IX X".split(" "); 
        d.Yu = { health: a.MA, armor: a.KA, barrier: a.LA, shield: a.NA }; 
        d.rC = [a.FA, a.jB, a.zB, a.qB, a.DB]; 
        
        d.Nb = function (c, e, z) { 
            z = z || {}; 
            z.$c = !1; 
            for (var s in e) {
                 var u = e[s], p = d.get_parameter_value_format(s); 
                 p.$d ? z.$c = s : (p.format && (u = p.format(Math.abs(u))), c = p.precision ? c.replace("{" + s + "}", d.va(u, p.precision, !0)) : c.replace("{" + s + "}", d.va(u))) 
            } 
            return c 
        }; 
        
        d.get_parameter_value_format = function (c) { 
            return parameter_value_formats[c] ? parameter_value_formats[c] : default_format 
        }; 
        
        d.va = function (c, d, e) {
            if ("undefined" === typeof d || 0 > d) d = 2; 
            "undefined" === typeof e && (e = !1); 
            var s = Math.pow(10, d); 
            c = Math.round(c * s) / s; 
            return e || 0 != c % 1 ? c.toFixed(d) : "" + c
        }; 
        
        d.uf = function (e) { 
            var g = !1, z = c("<tbody>"), s; 
            for (s in e) { 
                var u = e[s]; 
                if (1 != u) { 
                    var g = !0, p = c("<td>").addClass("bonus-value"); 
                    1 < u ? p.append(c("<span>").addClass("buff").text("+" + 100 * u + "%")) : p.append(c("<span>").addClass("debuff").text("-" + 100 * (1 - u) + "%")); 
                    z.append(c("<tr>").append(p, c("<td>").html(d.Yu[s]))) 
                } 
            } 
            return g ? c("<table>").append(z) : !1 
        }; 
        
        d.Uc = function (e, g) {
            for (var z = 0; z < g.attributes.length; z++) {
                var s = c("<tr>"), 
                    u = c("<td>").addClass("bonus-value"), 
                    p = d.get_parameter_value_format(g.attributes[z].attr), 
                    A = g.attributes[z].value; p.format && (A = p.format(g.attributes[z].value)); 
                A = d.va(Math.abs(A)) + p.j; 
                0 > g.attributes[z].value ? u.append(c("<span>").addClass("debuff").text("-" + A)) : u.append(c("<span>").addClass("buff").text("+" + A)); s.append(u); 
                u = c("<td>").text(Core.format(0 == g.ia ? "{0} {1}" : "{0} {1} ({2})", g.object.evolutions[0].name, d.evolution_codes[g.ia], g.object.evolutions[g.ia].name)); 
                s.append(u); 
                e.append(s)
            }
        }; 
        
        d.Vc = function (e, g) {
            for (var s = 0; s < g.attributes.length; s++) {
                var P = c("<tr>"), 
                    u = c("<td>").addClass("bonus-value"), 
                    p = d.get_parameter_value_format(g.attributes[s].attr), 
                    A = g.attributes[s].value; 
                    p.format && (A = p.format(g.attributes[s].value)); 
                A = d.va(Math.abs(A)) + p.j;
                0 > g.attributes[s].value ? u.append(c("<span>").addClass("debuff").text("-" + A)) : u.append(c("<span>").addClass("buff").text("+" + A)); 
                P.append(u); 
                u = c("<td>").text(Core.format("{0} {1} ({2})", g.object.name, d.rank_codes[g.ia], p.name)); 
                P.append(u); 
                e.append(P)
            }
        }

    })(V.Xd = V.Xd || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires game.character.js
     @requires ui.input.js
     @requires ui.tooltip.js
     @requires view.utilities.js
    */
    V = V || {}; jQuery191(function () { V.wh.initialize() });
    (function (d, c) {
        function e() {
            var d = [], 
                e = c("<p>").append(c("<span>").addClass("stat-id").text(ea.lB + ": "))
                            .append(c("<span>").attr("id", "points-available").on("powerChanged.View.PowerSelector", ha)),
                e = c("<div>").addClass("infobar").append(e).append(c("<div>").addClass("power-reset").attr("ui-tooltip-data", ea.pB).click(u)); 
                d.push(e); 
            for (e = 0; 5 > e; e++) {
                var n = c("<div>").addClass("power-label").data("power", e).append(c("<p>")); 
                ca.Ll(n).change(m).hide(); 
                c(".ui-check", n).attr("ui-tooltip-data", ea.zA); 
                for (var n = c("<div>").addClass("power-tree").attr("id", "power-" + e).append(n), s = c("<div>").addClass("power-evo"), da = 0; da < y.evolution_codes.length; da++) { 
                    var A = c("<div>").addClass("power-icon rank-" + y.evolution_codes[da]).append(c("<img>")), A = c("<div>").addClass("power-frame").append(A); 
                    A.data("power", e).data("rank", da); A.hover(g, z).click(fa); 
                    A.on("powerChanged.View.PowerSelector", function (d) { d.stopPropagation(); p(c(this)) }); 
                    var L = D.Ob(da); 
                    L != D.Pa.eb ? (s.append(A), L == D.Pa.ee && (n.append(s), s = c("<div>").addClass("power-evo"))) : n.append(A) 
                } 
                s = c("<div>").addClass("stat-table power-attributes"); 
                s.append(c("<table>").append(c("<tbody>"))); 
                n.append(s); 
                n.append(c("<div>").addClass("clearfix")); 
                d.push(n)
            } 
            return c("<div>").attr("id", "power-selector").append(d)
        } 

        function P(d, e, g) { 
            var n = D.nd(d), 
                m = {}, 
                p = y.Nb(n.evolutions[e].a, n.evolutions[e].attributes, m); 
            m.$c && (d = D.Ge(d, m.$c, { Yc: n.evolutions[e].attributes[m.$c], ea: "health" }), p = p.replace("{" + m.$c + "}", '<span class="buff">' + y.va(d.value) + "</span>"), g && da.push(g)); 
            return c("<div>").addClass("builder-tip power-tip").append(c("<h3>").text(n.evolutions[e].name)).append(c("<p>").html(p)) 
        }

        function s() { 
            L.hide() 
        } 
        
        function K() { 
            c(".power-frame").each(function () { c(this).trigger("powerChanged.View.PowerSelector") }); 
            c("#points-available").trigger("powerChanged.View.PowerSelector"); 
            n(); 
            Z(); 
            c("#character-builder").trigger("powerChanged.View.PowerSelector") 
        } 
        
        function g() { 
            var d = c(this); 
            if (!(d.hasClass("power-disabled") || d.hasClass("power-active") || d.hasClass("power-inactive"))) 
                for (var e = d.data("power"), d = d.data("rank"), d = D.Jg(e, d), g = 0; g < d.length; g++)
                    c(".rank-" + y.evolution_codes[d[g]], c("#power-" + e)).parent().addClass("power-required") 
        }

        function z() { 
            var d = c(this); 
            d.hasClass("power-disabled") || d.hasClass("power-active") || d.hasClass("power-inactive") || c(".power-required").removeClass("power-required") 
        } 
        
        function fa() { 
            var d = c(this); 
            if (!d.hasClass("power-disabled")) { 
                var e = d.data("power"), g = d.data("rank"); 
                d.hasClass("power-active") ? (D.sg(e, g, !0), O(e), K()) : D.gh(e, g, !0) && (D.Pe(e, g) && D.sg(e, D.Ob(g) == D.Pa.Jb ? g + 1 : g - 1), D.Dw(e, g), O(e), K()) 
            } 
        } 
        
        function u() {
            D.Kh(); 
            n(); 
            Z(); 
            c(".power-label > input").prop("checked", !1); c(".power-frame").removeClass("power-active power-inactive power-disabled");
            c("#points-available").trigger("powerChanged.View.PowerSelector"); c("#character-builder").trigger("powerChanged.View.PowerSelector")
        } 
        
        function p(c) { 
            var d = c.data("power"), e = c.data("rank"), g = D.Ob(e); 
            c.removeClass("power-required"); 
            if (D.vb(d, e)) 
                c.addClass("power-active"), c.removeClass("power-inactive"); 
            else { 
                c.removeClass("power-active"); 
                if (g != D.Pa.eb) { 
                    if (D.vb(d, g == D.Pa.Jb ? e + 1 : e - 1)) { 
                        c.addClass("power-inactive"); 
                        return 
                    } 
                    c.removeClass("power-inactive") 
                } 
                D.Ie(d, e) ? c.removeClass("power-disabled") : c.addClass("power-disabled") 
            } 
        }
        function A() { 
            L.fadeIn("fast") 
        } 
        function m() { 
            var d = c(this).parent().data("power"); 
            if (D.fh(d)) 
                D.Rm(d); 
            else 
                for (var d = D.Ui(d), e = 0; e < d.length; e++)
                    c("#power-" + d[e] + " input").prop("checked", !1); 
            n(); 
            Z(); 
            c("#character-builder").trigger("powerChanged.View.PowerSelector") 
        }

        function ha(d) { 
            d.stopPropagation(); 
            c(this).text(D.get_points_available()) 
        } 

        function O(d) {
            for (var e = c("#power-" + d), e = c(".stat-table tbody", e).empty(), g = D.nd(d), n = g.h, m = 0; m < n.length; m++) {
                var p = n[m], 
                    s = y.get_parameter_value_format(p), 
                    u = {}, 
                    da = c("<tr>"), 
                    z = c("<td>").addClass("stat-id"), 
                    A = c("<td>"), 
                    E = c("<div>").addClass("builder-tip power-tip"); 
                g.Z && g.Z[p] ? z.text(g.Z[p] + ":") : z.text(s.name + ":"); 
                if (D.dh(p)) {
                    for (var L = c("<tr>").append(c("<td>").addClass("stat-id").text(ea.OB)), ca = ["health", "armor", "barrier", "shield"], Z = 0; Z < ca.length; Z++)
                        u = D.Ge(d, p, { ea: ca[Z] }), 
                        u = y.va(u.value, 0), 
                        L.append(c("<td>").append(c("<span>").addClass(ca[Z]).text(u))); 
                        u = c("<table>").append(c("<tbody>").append(L)); 
                        E.append(c("<h3>").text(ea.mB), u); 
                        u = D.Ge(d, p); 
                        g.i && (L = y.uf(g.i), !1 !== L && E.append(c("<h3>").text(ea.Af), L))
                } else u = D.Xo(d, p); 
                L = u.value; 
                s.format && (L = s.format(L)); 
                L = y.va(L, 2) + s.j; 
                A.append(c("<span>").addClass("stat-tip").text(L)); 
                ja.Aa(c(".stat-tip", A)); 
                if (0 < u.C.length) { 
                    s = E; 
                    L = u.C; 
                    ca = c("<tbody>"); 
                    for (Z = 0; Z < L.length; Z++) { 
                        var K = L[Z]; 
                        "power" == K.type ? y.Uc(ca, K) : y.Vc(ca, K) 
                    } 
                    0 < L.length && (L = c("<table>").addClass("tip-bonus-table").append(ca), s.append(c("<h3>").text(ea.Wc)).append(L)) 
                } 
                D.dh(p) || 0 < u.C.length ? ja.ba(c(".stat-tip", A), E, { location: "bottomLeft" }) : ja.ba(c(".stat-tip", A), ea.Xc, { location: "bottomLeft" }); 
                da.append(z, A); 
                e.append(da)
            }
        } 

        function n() { 
            for (var c = 0; c < da.length; c++) { 
                var d = da[c], e = d.parent().data("power"), g = d.parent().data("rank"); 
                ja.Aa(d); 
                ja.ba(d, P(e, g)) 
            } 
        } 

        function Z() { 
            for (var c = D.nd(), d = 0; d < c.length; d++)
                O(d) 
        } 

        var D = h.Xa, 
            ca = R.bh, 
            ja = R.Tc, 
            y = V.Xd, 
            ea = a, 
            L = null, 
            da = []; 

        d.initialize = function () {
            L = e(); 
            c("#build-content").append(L); 
            c("#character-builder").on("kitSelected.View.KitSelector", d.Ea); 
            var g = Core.format("{0} {1} {2} {3} {4} {5}", "weaponSelected.View.WeaponSelector", "weaponModSelected.View.WeaponSelector",
                "ammoEquipmentSelected.View.WeaponSelector", "armorEquipmentSelected.View.WeaponSelector", "gearEquipmentSelected.View.WeaponSelector", 
                "equippedWeaponChanged.View.WeaponSelector"); 
            c("#character-builder").on(g, function () { n(); Z() }); 
            c("#build-content").on("overlayShowing.View.Character", s); 
            c("#build-content").on("overlayHidden.View.Character", A)
        }; 
        
        d.Ea = function () {
            da = []; 
            c("#points-available").text(D.get_points_available()); 
            for (var d = D.nd(), e = 0; e < d.length; e++) {
                c("#power-" + e + " .power-label > label").hide(); 
                c("#power-" + e + " .power-label > p").hide();
                var g = d[e].evolutions[0].name; 
                !1 === d[e].g ? c("#power-" + e + " .power-label > p").text(g).show() : (c("#power-" + e + " .ui-check-label").text(g), c("#power-" + e + " .ui-input-label").show()); 
                c("#power-" + e + " .power-label > input").prop("checked", D.fh(e)); 
                var g = c("#power-" + e), n = Core.mediaUrl + "images/powers/" + d[e].icon + ".png"; c(".power-icon", g).each(function (d, g) { g = c(g); g.children().attr("src", n); p(g.parent()); var m = g.parent().data("rank"); ja.Aa(g); ja.ba(g, P(e, m, g)) })
            } 
            Z()
        }
    })(V.wh = V.wh || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires game.character.js
     @requires game.equipment.js
     @requires game.weapons.js
     @requires locale.en.js
     @requires ui.image.js
     @requires ui.tooltip.js
     @requires view.utilities.js
    */
    V = V || {}; jQuery191(function () { V.Ef.initialize() });
    (function (d, c) {

        function e() { 
            var d = c(this); 
            d.hasClass("ui-collapse-down") ? 
                (c(".ui-collapsible", d.parent().parent()).slideUp("fast"), d.removeClass("ui-collapse-down")) : 
                (c(".ui-collapsible").hide(), c(".ui-collapse-button").removeClass("ui-collapse-down"), c(".ui-collapsible", d.parent().parent()).slideDown("fast"), d.addClass("ui-collapse-down")) 
        } 
            
        function P() {
            for (var d = [], e = 0; e < equipment[G.Fa].length; e++) {
                for (var f = equipment[G.Fa][e], g = c("<ul>"), k = 0; k < f.evolutions.length; k++) {
                    var m = c("<p>").text(f.name + " " + Y[k]), y = c("<li>").append(m).data("type",
                        G.Fa).data("equipment", e).data("rank", k).click(n), p = c("<div>").append(c("<h3>").text(f.name + " " + Y[k])).append(c("<p>").text(ia.Nb(f.a, f.evolutions[k].attributes))); Q.ba(m, p); g.append(y)
                } f = c("<div>").addClass("equipment-small rarity-small-" + U.rarity.common).append(aa.Lb(Core.mediaUrl + "images/consumables/" + f.d, 128, 96, "equipment")); g = c("<div>").addClass("equipment-cell").append(f).append(g); d.push(g)
            } d.push(c("<div>").addClass("clearfix")); return c("<div>").attr("id", "equipment-type-" + G.Fa).addClass("selector-group").data("type",
                G.Fa).append(d)
        } 
        
        function s() {
            for (var d = [], e = 0; e < equipment[G.jb].length; e++) {
                for (var f = equipment[G.jb][e], g = c("<ul>"), k = 0; k < f.evolutions.length; k++) { var m = c("<p>").text(f.name + " " + Y[k]), y = c("<li>").append(m).data("type", G.jb).data("equipment", e).data("rank", k).click(n), p = c("<div>").append(c("<h3>").text(f.name + " " + Y[k])).append(c("<p>").text(ia.Nb(f.a, f.evolutions[k].attributes))); Q.ba(m, p); g.append(y) } f = c("<div>").addClass("equipment-small rarity-small-" + U.rarity.common).append(aa.Lb(Core.mediaUrl + "images/consumables/" + f.d, 128, 96, "equipment"));
                g = c("<div>").addClass("equipment-cell").append(f).append(g); d.push(g)
            } d.push(c("<div>").addClass("clearfix")); return c("<div>").attr("id", "equipment-type-" + G.jb).addClass("selector-group").data("type", G.jb).append(d)
        } 
        
        function K() {
            for (var d = c("<div>").addClass("ui-collapse-button").click(e), 
                     f = c("<div>").addClass("infobar ui-collapse-header"), 
                     g = c("<div>").addClass("ui-collapsible"), 
                     k = c("<div>").addClass("ui-collapsible"),
                     z = c("<div>").addClass("ui-collapsible"),
                     m = 0; m < equipment[G.mb].length; m++) {
                var y = equipment[G.mb][m], p = c("<div>")
                    .addClass("weapon-small rarity-small-" + y.f)
                    .append(aa.Lb(Core.mediaUrl + "images/gear/" + y.d, 128, 96, "gear"))
                    .append(c("<p>").text(y.name)).data("type", G.mb)
                    .data("equipment", m)
                    .click(n);
                    y.f == U.rarity.uncommon ? g.append(p) : y.f == U.rarity.rare ? k.append(p) : z.append(p)
            } 
            g = c("<div>").addClass("selector-group")
                          .append(f.clone().append(c("<p>").text("Uncommon")).append(d.clone(1).attr("id", "gear-button-" + U.rarity.uncommon)))
                          .append(g.append(c("<div>").addClass("clearfix")).hide());
            k = c("<div>").addClass("selector-group")
                          .append(f.clone().append(c("<p>").text("Rare")).append(d.clone(1).attr("id", "gear-button-" + U.rarity.rare)))
                          .append(k.append(c("<div>").addClass("clearfix")).hide());
            z = c("<div>").addClass("selector-group")
                          .append(f.clone().append(c("<p>").text("Unobtainable")).append(d.clone(1).attr("id", "gear-button-" + U.rarity.unobtainable)))
                          .append(z.append(c("<div>").addClass("clearfix")).hide());

            return c("<div>").attr("id", "equipment-type-" + G.mb).data("type", G.mb).append(g).append(k).append(z)
        } 
        
        function g() {
            for (var d = c("<div>").addClass("selector-group").attr("id", "equipment-type-" + G.Hb).data("type", G.Hb), e = 0; e < equipment[G.Hb].length; e++) { var f = equipment[G.Hb][e], g = Core.mediaUrl + "images/consumables/" + f.d, f = c("<div>").addClass("weapon-small rarity-small-" + U.rarity.common).append(aa.Lb(g, 128, 96, "equipment")).append(c("<p>").text(f.name)).data("type", G.Hb).data("equipment", e).click(n); d.append(f) } d.append(c("<div>").addClass("clearfix"));
            return d
        } 
        
        function z() { 
            // get slot
            var e = S; 
            // zero the equipment
            E.Iv(e); 
            A(); 
            d.Ea(); 
            c("#character-builder").trigger(k[e]) 
        } 

        function deequip() {
            for (var e = 0; e < 4; ++e) {
                E.Iv(e); 
                A(); 
                d.Ea(); 
                c("#character-builder").trigger(k[e])
            }
        }

        function fa() { 
            E.Jv(f); 
            m(); 
            d.Ea(); 
            c("#character-builder").trigger("weaponSelected.View.WeaponSelector"); 
            c("#character-builder").trigger("equippedWeaponChanged.View.WeaponSelector") 
        } 
        function u() { 
            E.Dv(f, x); 
            ha(); 
            d.Ea(); 
            c("#character-builder").trigger("weaponModSelected.View.WeaponSelector") 
        }

        function p() {
            E.Zn(f); c(this).hide(); f == B.ha ? (c("#primary-weapon .weapon-equipped").show(), c("#secondary-weapon .weapon-equipped").hide()) :
                (c("#primary-weapon .weapon-equipped").hide(), c("#secondary-weapon .weapon-equipped").show()); c("#character-builder").trigger("equippedWeaponChanged.View.WeaponSelector")
        } 
        
        function A(d, e) { 
            e != t && (
                S = -1, 
                t.hide()
            ); 
            e || c("#build-content").trigger("overlayHidden.View.Character") 
        } 
        
        function m(d, e) { e != xa && (f = -1, xa.hide()); e || c("#build-content").trigger("overlayHidden.View.Character") } 
        
        function ha(d, e) {
            e != ya && (x = f = -1, ya.hide()); 
            e || c("#build-content").trigger("overlayHidden.View.Character") 
        } 
        
        function O(e) {
            c(this).hasClass("rank-active") ?
            e.stopPropagation() : (c("#equipment-selector .item-rank").removeClass("rank-active"), c(this).addClass("rank-active"), v = c(this).data("rank"), E.Kw(S, v), d.Ea(), S != G.Fa && S != G.jb && na(c("#equipment-type-" + S)), c("#character-builder").trigger(k[S]))
        } 
        
        function n() { var e = S; if (S == G.Fa || S == G.jb) v = c(this).data("rank"); 
        E.change_equipment(S, c(this).data("equipment"), v); Telemetry.trackEvent("ME3 Builder", "onEquipmentSelected", "slot: " + S); A(); d.Ea(); c("#character-builder").trigger(k[e]) } function Z() {
            var d = E.Qa(B.ha); la(c("#primary-weapon"),
                d); Q.Aa(c("#primary-weapon .weapon-dmg")); Q.ba(c("#primary-weapon .weapon-dmg"), oa(d, X[d.type][d.index])); Q.Aa(c("#primary-weapon .weapon img")); Q.ba(c("#primary-weapon .weapon img"), va(d)); 
                d = E.Qa(B.xa); -1 != d.type && (la(c("#secondary-weapon"), d), Q.Aa(c("#secondary-weapon .weapon-dmg")), Q.ba(c("#secondary-weapon .weapon-dmg"), oa(d, X[d.type][d.index])), Q.Aa(c("#secondary-weapon .weapon img")), Q.ba(c("#secondary-weapon .weapon img"), va(d)))
        } 
        
        function D(e) {
            c(this).hasClass("rank-active") ? e.stopPropagation() :
            (c("#weapon-selector .item-rank").removeClass("rank-active"), c(this).addClass("rank-active"), r = c(this).data("rank"), E.Qw(f, r), ka(), d.Ea(), c("#character-builder").trigger("weaponSelected.View.WeaponSelector"))
        } function ca() { E.Nw(f, c(this).data("type"), c(this).data("weapon"), r); Telemetry.trackEvent("ME3 Builder", "onWeaponSelected", "type: " + c(this).data("type")); m(); d.Ea(); c("#character-builder").trigger("weaponSelected.View.WeaponSelector") } function ja(e) {
            c(this).hasClass("rank-active") ? e.stopPropagation() :
            (c("#mod-selector .item-rank").removeClass("rank-active"), c(this).addClass("rank-active"), pa = c(this).data("rank"), E.Pw(f, x, pa), d.Ea(), e = E.Qa(f), M(c("#mod-type-" + e.type)), c("#character-builder").trigger("weaponModSelected.View.WeaponSelector"))
        } function y(e) { E.ud(f, x, c(this).data("mod")) ? e.stopPropagation() : (E.Ow(f, x, c(this).data("mod"), pa), Telemetry.trackEvent("ME3 Builder", "onWeaponModSelected"), ha(), d.Ea(), c("#character-builder").trigger("weaponModSelected.View.WeaponSelector")) } 
        
        function ea() {
            c("#mod-empty-button").hide();
            c("#mod-selector .item-rank").removeClass("rank-active"); 
            c("#mod-selector .selector-group").hide(); 
            c("#mod-selector .weapon-small").removeClass("mod-inuse").show(); 
            var d = f == B.ha ? w.ji : w.li; c("#mod-slot").text(d + ": " + (0 == x ? w.hB : w.iB)); 
            d = E.Qa(f); 
            -1 != (0 == x ? d.mod_1_type : d.mod_2_type) ? 
                (pa = 0 == x ? 
                    d.mod_1_level : 
                    d.mod_2_level, c("#mod-empty-button").show()) 
                : pa = U.Qb; 
            c("#mod-rank-" + pa).addClass("rank-active"); c("#mod-type-" + d.type).show(); M(c("#mod-type-" + d.type)); c("#mod-type-" + d.type + " .weapon-small").each(function (d, e) {
                E.Sq(f, c(e).data("mod")) &&
                c(e).hide(); E.ud(f, x, c(e).data("mod")) && c(e).addClass("mod-inuse")
            })
        } 
        function L() {
            var d = c(this).data("slot"); 
            d != S && (c("#build-content").trigger("overlayShowing.View.Character", t), 
                       S = d, 
                       c("#equipment-empty-button").hide(), 
                       c("#equipment-selector .rank-selector").show(), 
                       c("#equipment-selector .item-rank").removeClass("rank-active").show(), 
                       c("#equipment-selector .ui-collapse-down").click(), 
                       c("#equipment-selector > .selector-group").hide(), 
                       c("#equipment-type-" + G.mb).hide(), 
                       c("#equipment-type-" + S).show(),
                d = E.equipment_type_at_index(S), -1 != d && (c("#equipment-empty-button").show(), v = E.equipment_level_at_index(S), c("#equipment-rank-" + v).addClass("rank-active")), S == G.Fa ? (c("#equipment-slot").text(w.SA), c("#equipment-selector .rank-selector").hide()) : S == G.jb ? (c("#equipment-slot").text(w.TA), c("#equipment-selector .rank-selector").hide()) : (S == G.mb ? (c("#equipment-slot").text(w.UA), c("#equipment-selector .stat-id").text(w.YA + ": "), -1 == d ? (v = U.mh, c("#equipment-rank-" + v).addClass("rank-active"), c("#gear-button-" + U.rarity.rare).click()) : c("#gear-button-" + equipment[S][d].f).click()) :
                    (c("#equipment-slot").text(w.VA), c("#equipment-selector .stat-id").text(w.JA + ": "), c("#equipment-selector #equipment-rank-3").hide(), c("#equipment-selector #equipment-rank-4").hide(), -1 == d && (v = 2, c("#equipment-rank-" + v).addClass("rank-active"))), na(c("#equipment-type-" + S))), t.fadeIn("fast"))
        } 
        
        function da() {
            var d = c(this).parents(".weapon-panel").data("slot"); if (d != f || -1 != x) {
                c("#build-content").trigger("overlayShowing.View.Character", xa); f = d; c("#weapon-empty-button").hide(); c("#weapon-equip-button").hide();
                c("#weapon-selector .item-rank").removeClass("rank-active"); c("#weapon-selector .selector-group").show(); c("#weapon-selector .ui-collapse-down").click(); d = E.Qa(f); -1 != d.type ? (r = d.ia, c("#weapon-type-" + d.type + " .ui-collapse-button").click(), E.hh(f) || c("#weapon-equip-button").show()) : r = U.xd; c("#weapon-rank-" + r).addClass("rank-active"); var e = E.Qa(f == B.ha ? B.xa : B.ha); -1 != e.type && (c("#weapon-type-" + e.type).hide(), -1 != d.type && c("#weapon-empty-button").show()); f == B.ha ? c("#weapon-slot").text(w.ji) : c("#weapon-slot").text(w.li);
                ka(); xa.fadeIn("fast")
            }
        } 
        
        function q() { 
            var d = c(this).parents(".weapon-panel").data("slot"), 
                e = c(this).data("mod-slot"); 
            d == f && e == x || -1 == E.Qa(d).type || (c("#build-content").trigger("overlayShowing.View.Character", ya), f = d, x = e, ea(), ya.fadeIn("fast")) 
        } 
        
        function sa() { 
            ma = !ma; 
            LocalStorage.set("me3.ui.showResistanceDamage", ma.toString()); 
            la(c("#primary-weapon"), E.Qa(B.ha)); 
            var d = E.Qa(B.xa); 
            -1 != d.type && la(c("#secondary-weapon"), d) 
        } 
        
        function oa(d, e) {
            var modif = E.get_piercing_modifier_wrapper(e);
            var header_1 = "Weapon damage", header_2 = "Charged damage";
            if (modif == 0) {
                // header_1 += " (no piercing)";
                // header_2 += " (no piercing)";
            }
            if (modif == 1) {
                // header_1 += " (seamless piercing)";
                // header_2 += " (seamless piercing)";
            }
            // console.log("modif: " + modif)
            var f = null, 
                g = null, 
                k = E.equipment_type_at_index(G.Fa),
                n = c("<div>").addClass("builder-tip weapon-dmg-tip");
            n.append(c("<h3>").text(header_1)); 
            var m = c("<tbody>"), 
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)); 
            W(f, d, {}); 
            m.append(f); 
            !1 !== e.headshot_capable && (
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                W(f, d, { type: "headshot" }), 
                m.append(f),
                f = c("<tr>").append(c("<td>").addClass("stat-id").text("Boss HS")), 
                W(f, d, { type: "Boss HS" }), 
                m.append(f)
            ); 
            -1 != k && (
                g = equipment[G.Fa][k], 
                0 != g.i.health && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                    W(f, d, { type: "ammo" }), 
                    m.append(f)
                )
            ); 
            n.append(c("<table>").append(m)); 
            e.charged && (
                n.append(c("<h3>").text(header_2)), 
                m = c("<tbody>"), 
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)),
                W(f, d, { gb: !0 }), 
                m.append(f), 
                !1 !== e.headshot_capable && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                    W(f, d, { gb: !0, type: "headshot" }), m.append(f),
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text("Boss HS")), 
                    W(f, d, { gb: !0, type: "Boss HS" }), m.append(f)
                ), 
                -1 != k && 0 != g.i.health && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                    W(f, d, { gb: !0, type: "ammo" }), m.append(f)
                ), 
                n.append(c("<table>").append(m))
            );
            if (modif != 0 && modif != 1) {
            // if (true) {
                n.append(c("<h3>").text("Weapon damage (piercing)")); 
            var m = c("<tbody>"), 
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)); 
            W(f, d, { piercing: true }); 
            m.append(f); 
            !1 !== e.headshot_capable && (
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                W(f, d, { type: "headshot", piercing: true }), 
                m.append(f),
                f = c("<tr>").append(c("<td>").addClass("stat-id").text("Boss HS")), 
                W(f, d, { type: "Boss HS", piercing: true }), 
                m.append(f)
            ); 
            -1 != k && (
                g = equipment[G.Fa][k], 
                0 != g.i.health && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                    W(f, d, { type: "ammo", piercing: true }), 
                    m.append(f)
                )
            ); 
            n.append(c("<table>").append(m)); 
            e.charged && (
                n.append(c("<h3>").text("Charged damage (piercing)")), 
                m = c("<tbody>"), 
                f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)),
                W(f, d, { gb: !0, piercing: true }), 
                m.append(f), 
                !1 !== e.headshot_capable && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                    W(f, d, { gb: !0, type: "headshot", piercing: true }), m.append(f),
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text("Boss HS")), 
                    W(f, d, { gb: !0, type: "Boss HS", piercing: true }), m.append(f)
                ), 
                -1 != k && 0 != g.i.health && (
                    f = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                    W(f, d, { gb: !0, type: "ammo", piercing: true }), m.append(f)
                ), 
                n.append(c("<table>").append(m))
            
                );
            }
            if (modif == 1)
                n.append(c("<span>")).append(c("<h4>").addClass("buff").text("Seamless piercing.")).append(c("<br>"))
            f = ia.uf(e.i.organic); 
            !1 !== f && n.append(c("<h3>").text(w.Af), f); 
            f = c("<tbody>"); 
            g = E.cp(d); 
            for (k = 0; k < g.length; k++)
                m = g[k], 
                "power" == m.type ? ia.Uc(f, m) : ia.Vc(f, m); 
            0 < g.length && (
                f = c("<table>").addClass("tip-bonus-table").append(f),
                n.append(c("<h3>").text(w.Wc)).append(f)
            ); 
            // n.append(c("<td>").text("aaa"))
            // return res.append(n).append(c("<td>").text("aaa"))
            return n;
        } 
        
        function W(d, e, f) { 
            for (var g = ["health", "armor", "barrier", "shield"], k = 0; k < g.length; k++) { 
                f.ea = g[k]; 
                var m = E.Ec(e, f, "health" == g[k] ? !0 : !1); 
                d.append(c("<td>").append(c("<span>").addClass(g[k]).text(m))) 
            } 
        } 
        
        function va(d, e, f) {
            var g = X[d.type][d.index], 
                k = E.bp(d), 
                m = null, 
                n = E.equipment_type_at_index(G.Fa), 
                y = c("<tbody>"), 
                p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.eB + ":")).append(c("<td>").text(ia.va(k.GC, 0))); 
            y.append(p); 
            p = ia.va(k.EC, 0); 
            p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.IA + ":")).append(c("<td>").text(0 == p ? w.dB : p)); 
            y.append(p); 
            p = ia.va(100 * E.Fc(d), 0); 
            p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.NB + ":")).append(c("<td>").text("-" + p + "%")); 
            y.append(p); 
            k = c("<div>").addClass("builder-tip weapon-tip"); 
            p = c("<h3>").text(g.name + " " + Y[d.ia]).append(c("<span>").addClass("weapon-type").text(N[g.type])); 
            k.append(p); 
            k.append(c("<table>").append(y)); 
            e && (
                e = c("<tbody>"), 
                p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)), 
                W(p, d, {}), e.append(p), 
                !1 !== g.headshot_capable && (
                    p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)),
                    W(p, d, { type: "headshot" }), 
                    e.append(p)
                ), 
                -1 != n && (
                    m = equipment[G.Fa][n], 
                    0 != m.i.health && (p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                    W(p, d, { type: "ammo" }), 
                    e.append(p))
                ), 
                k.append(c("<h3>").text(w.pi)), // "Weapon Damage"
                k.append(c("<table>").append(e)), 
                g.charged && (
                    e = c("<tbody>"), 
                    p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)), 
                    W(p, d, { gb: !0 }), e.append(p), 
                    !1 !== g.headshot_capable && (
                        p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                        W(p, d, { gb: !0, type: "headshot" }), e.append(p)
                    ), 
                    -1 != n && 0 != m.i.health && (
                        p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)),
                        W(p, d, { gb: !0, type: "ammo" }), e.append(p)
                    ), 
                    k.append(c("<h3>").text(w.wf)), // "Charged Damage"
                    k.append(c("<table>").append(e))
                ), 
                !f || d.type == f.type && d.index == f.index || (
                    d = X[f.type][f.index], 
                    e = c("<tbody>"), 
                    p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)), 
                    W(p, f, {}), 
                    e.append(p), 
                    !1 !== d.headshot_capable && (
                        p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                        W(p, f, { type: "headshot" }), e.append(p)
                    ), 
                    -1 != n && 0 != m.i.health && (
                        p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                        W(p, f, { type: "ammo" }), 
                        e.append(p)
                    ), 
                    k.append(c("<h3>").text(d.name + " " + w.l)), 
                    k.append(c("<table>").append(e)), 
                    d.charged && (
                        e = c("<tbody>"), p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.qc)), 
                        W(p, f, { gb: !0 }), 
                        e.append(p), 
                        !1 !== d.headshot_capable && (
                            p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.pc)), 
                            W(p, f, { gb: !0, type: "headshot" }), 
                            e.append(p)
                        ), 
                        -1 != n && 0 != m.i.health && (
                            p = c("<tr>").append(c("<td>").addClass("stat-id").text(w.oc)), 
                            W(p, f, { gb: !0, type: "ammo" }), 
                            e.append(p)
                        ), 
                        k.append(c("<h3>").text(d.name + " " + w.wf)), 
                        k.append(c("<table>").append(e))
                    )
                )
            ); 
            k.append(c("<p>").text(g.a));
            return k
        } 
        
        function ta(d) {
            var e = c(d); Q.Aa(c(".consumable > img", e)); c(".consumable > img", e).remove(); c(".consumable > p", e).show(); var f = c(".consumable", e).data("slot"); d = E.equipment_type_at_index(f); if (-1 != d) {
                c(".consumable > p", e).hide(); var g = equipment[f][d]; d = c("<img>").attr("height", 60).attr("width", 80).attr("src", Core.mediaUrl + "images/" + (f == G.mb ? "gear/" : "consumables/") + g.d); d.data("ui-tooltip-options", { location: "topRight" }); c(".consumable", e).append(d); e = E.equipment_level_at_index(f); e = c("<div>").append(c("<h3>").text(g.name + " " + Y[e])).append(c("<p>").text(ia.Nb(g.a,
                    g.evolutions[e].attributes))); Q.ba(d, e)
            }
        } function na(d) { var e = d.data("type"); c(".weapon-small", d).each(function (d, f) { Q.Aa(c(f)); var g = c(f).data("equipment"), g = equipment[e][g], g = c("<div>").append(c("<h3>").text(g.name + " " + Y[v])).append(c("<p>").text(ia.Nb(g.a, g.evolutions[v].attributes))); Q.ba(c(f), g, { location: "topLeft" }) }) } function la(d, e) {
            ma ? c(".weapon-dmg", d).empty().append(c("<span>").addClass("armor").text(E.Ec(e, { ea: "armor" }, !0)), "/", c("<span>").addClass("barrier").text(E.Ec(e, { ea: "barrier" }, !0)), "/", c("<span>").addClass("shield").text(E.Ec(e,
                { ea: "shield" }))) : c(".weapon-dmg", d).text(E.Ec(e, null, !0))
        } 
        
        function ka() { 
            c("#weapon-selector .weapon-small").each(function (d, e) { 
                                                        e = c(e); 
                                                        Q.Aa(e); 
                                                        var g = E.Qa(f), 
                                                            k = c.extend({}, g), 
                                                            k = c.extend(k, { type: e.data("type"), index: e.data("weapon"), ia: r }); 
                                                        if (g.type == e.data("type")) { 
                                                            var m = !0; 
                                                            g.index == e.data("weapon") && (m = !1); 
                                                            Q.ba(e, va(k, m, g)) 
                                                        } else k = c.extend(k, { mod_1_type: -1, mod_2_type: -1 }), Q.ba(e, va(k)) 
                                                    }) 
        } 
        
        function M(d) {
            var e = d.data("type"); c(".weapon-small", d).each(function (d, g) {
                Q.Aa(c(g)); var k = c(g).data("mod"), m = ga[e][k], m = c("<div>").append(c("<h3>").text(m.name +
                    " " + Y[pa])).append(c("<p>").text(ia.Nb(m.a, m.evolutions[pa].attributes))); E.ud(f, x, k) && m.append(c("<p>").addClass("error").text(w.CB)); Q.ba(c(g), m, { location: "topLeft" })
            })
        } 
        
        function wa(d) {
            var e = c(d); d = "#primary-weapon" == d ? B.ha : B.xa; Q.Aa(c(".weapon > img", e)); c(".weapon > img", e).remove(); Q.Aa(c(".weapon-dmg", e)); c(".weapon-equipped", e).hide(); c(".weapon-mod", e).removeClass().addClass("weapon-mod"); c(".weapon-mod > p", e).show(); c(".weapon-mod > img", e).each(function () { Q.Aa(c(this)); c(this).remove() }); var f = E.Qa(d);
            if (-1 != f.type) {
                var g = X[f.type][f.index], k = c(".weapon", e).removeClass().addClass("weapon rarity-" + g.f), m = c("<img>").attr("height", 120).attr("width", 160).attr("src", Core.mediaUrl + "images/guns/" + g.d); m.data("ui-tooltip-options", { location: "mouse" }); c(".weapon", e).prepend(k.append(m)); c(".weapon > p", e).hide(); Q.ba(m, va(f)); c(".weapon-name", e).text(g.name + " " + Y[f.ia]); la(e, f); Q.ba(c(".weapon-dmg", e), oa(f, g)); c(".weapon-info > p", e).show(); c(".weapon-mod > p", e).removeClass("weapon-mod-disabled").removeAttr("ui-tooltip-data");
                c(".weapon-mod", e).each(function (d, e) { 
                                            var g = c(this).data("mod-slot"), 
                                            k = 0 == g ? f.mod_1_type : f.mod_2_type; 
                                            if (-1 != k) { 
                                                var m = ga[f.type][k], 
                                                k = c("<img>").attr("height", 55).attr("width", 80).attr("src", Core.mediaUrl + "images/mods/" + m.d); 
                                                k.data("ui-tooltip-options", { location: "bottomRight" }); 
                                                c(e).addClass("rarity-xsmall-" + m.f).append(k); 
                                                c(e).children("p").hide(); 
                                                g = 0 == g ? f.mod_1_level : f.mod_2_level; 
                                                g = c("<div>").append(c("<h3>").text(m.name + " " + Y[g])).append(c("<p>").text(ia.Nb(m.a, m.evolutions[g].attributes))); 
                                                Q.ba(k, g) } 
                                            }); 
                E.hh(d) && c(".weapon-equipped", e).show()
            } else c(".weapon", e).removeClass().addClass("weapon"), 
                   c(".weapon > p", e).show(), 
                   c(".weapon-info > p", e).hide(), 
                   c(".weapon-mod > p", e).addClass("weapon-mod-disabled").attr("ui-tooltip-data", w.uB).show()
        } 
        var E = h.Xa, 
            U = h.Ya, 
            aa = R.Image, 
            Q = R.Tc, 
            ia = V.Xd, 
            equipment = h.Ya.eg, 
            G = h.Xa.Ab, 
            w = a, 
            Y = ia.rank_codes, 
            X = h.Ya.Df, 
            ga = h.Ya.nh, 
            B = h.Xa.aa, 
            N = ia.rC, 
            ma = !1, 
            v = 0, 
            S = -1, 
            pa = U.Qb, 
            x = -1, 
            r = U.xd, 
            f = -1, 
            k = [], 
            t = null, 
            xa = null, 
            ya = null; 
            
        d.initialize = function () {
            ma = "true" == LocalStorage.get("me3.ui.showResistanceDamage") ? !0 : !1; var f = [], n = [w.HA, w.bB, w.BB, w.sB, w.FB], q = c("<p>").attr("id",
                "weapon-slot"), r = c("<div>").addClass("ui-button ui-button-primary").text(w.xf).click(m), v = c("<div>").addClass("ui-button ui-button-default").attr("id", "weapon-equip-button").text(w.RA).click(p), x = c("<div>").addClass("ui-button ui-button-default").attr("id", "weapon-empty-button").text(w.zf).click(fa), q = c("<div>").addClass("infobar").append(q, r, x, v); f.push(q); q = c("<p>").append(c("<span>").addClass("stat-id").text(w.MB + ":")); for (r = 0; r <= U.xd; r++)v = c("<span>").addClass("item-rank").text(Y[r]).attr("id",
                    "weapon-rank-" + r).data("rank", r).click(D), q.append(v); q = c("<div>").addClass("rank-selector").append(q); f.push(q); for (q = 0; q < X.length; q++) {
                        r = c("<div>").addClass("ui-collapse-button").click(e); r = c("<div>").addClass("infobar ui-collapse-header").append(c("<p>").text(n[q])).append(r); r = c("<div>").addClass("selector-group").attr("id", "weapon-type-" + q).append(r); v = c("<div>").addClass("ui-collapsible"); for (x = 0; x < X[q].length; x++) {
                            var L = X[q][x], L = c("<div>").addClass("weapon-small rarity-small-" + L.f).append(aa.Lb(Core.mediaUrl +
                                "images/guns/" + L.d, 128, 96, "weapon")).append(c("<p>").text(L.name)).data("type", q).data("weapon", x).click(ca); v.append(L)
                        } v.append(c("<div>").addClass("clearfix")).hide(); r.append(v); f.push(r)
                    } xa = c("<div>").attr("id", "weapon-selector").append(f); c("#build-content").append(xa.hide()); f = []; n = c("<p>").attr("id", "mod-slot"); q = c("<div>").addClass("ui-button ui-button-primary").text(w.xf).click(ha); r = c("<div>").addClass("ui-button ui-button-default").attr("id", "mod-empty-button").text(w.zf).click(u); n = c("<div>").addClass("infobar").append(n,
                        q, r); f.push(n); n = c("<p>").append(c("<span>").addClass("stat-id").text(w.LB + ":")); for (q = 0; q <= U.Qb; q++)r = c("<span>").addClass("item-rank").text(Y[q]).attr("id", "mod-rank-" + q).data("rank", q).click(ja), n.append(r); n = c("<div>").addClass("rank-selector").append(n); f.push(n); for (n = 0; n < ga.length; n++) {
                            q = c("<div>").addClass("selector-group").attr("id", "mod-type-" + n).data("type", n); for (r = 0; r < ga[n].length; r++)v = ga[n][r], v = c("<div>").addClass("weapon-small rarity-small-" + v.f).append(aa.Lb(Core.mediaUrl + "images/mods/" +
                                v.d, 128, 96, "weaponmod")).append(c("<p>").text(v.name)).data("type", n).data("mod", r).click(y), q.append(v); q.append(c("<div>").addClass("clearfix")); f.push(q.hide())
                        } ya = c("<div>").attr("id", "mod-selector").append(f); c("#build-content").append(ya.hide()); f = []; n = c("<p>").attr("id", "equipment-slot"); q = c("<div>").addClass("ui-button ui-button-primary").text(w.xf).click(A); 
                        r = c("<div>").addClass("ui-button ui-button-default").attr("id", "equipment-empty-button").text(w.zf).click(z); 
                        n = c("<div>").addClass("infobar").append(n,
                            q, r); f.push(n); n = c("<p>").append(c("<span>").addClass("stat-id")); for (q = 0; q <= U.mh; q++)r = c("<span>").addClass("item-rank").text(Y[q]).attr("id", "equipment-rank-" + q).data("rank", q).click(O), n.append(r); n = c("<div>").addClass("rank-selector").append(n); f.push(n); f.push(s()); f.push(K()); f.push(g()); f.push(P()); t = c("<div>").attr("id", "equipment-selector").append(f); c("#build-content").append(t.hide()); c("#character-builder").on("kitSelected.View.KitSelector", d.Ea); c("#character-builder").on("overlayShowing.View.Character closing.View.Character",
                                A); c("#character-builder").on("overlayShowing.View.Character closing.View.Character", m); c("#character-builder").on("overlayShowing.View.Character closing.View.Character", ha); c("#character-builder").on("powerChanged.View.PowerSelector", Z); k[G.Fa] = "ammoEquipmentSelected.View.WeaponSelector"; k[G.jb] = "armorEquipmentSelected.View.WeaponSelector"; k[G.mb] = "gearEquipmentSelected.View.WeaponSelector"; k[G.Hb] = "weaponEquipmentSelected.View.WeaponSelector"
        }; 
        
        d.mm = function () {
            var d = { location: "bottomRight" }, 
                e = c("<p>").append(c("<span>").addClass("stat-id").text(w.l + ": "))
                            .append(c("<span>").addClass("weapon-dmg stat-tip").data("ui-tooltip-options", d).click(sa)), 
                f = c("<div>").addClass("weapon-info")
                              .append(c("<p>").append(c("<span>").addClass("weapon-name")).hide())
                              .append(e.hide()), 
                e = c("<div>").addClass("weapon-summary"); 
            e.append(f); 
            f = c("<div>").addClass("weapon-mod")
                          .append(c("<p>").text(w.yf).data("ui-tooltip-options", d)).click(q); 
            e.append(f.data("mod-slot", 0)); 
            e.append(f.clone(!0).data("mod-slot", 1)); 
            e.append(c("<div>").addClass("weapon-equipped").attr("ui-tooltip-data", w.WA).data("ui-tooltip-options", d).hide()); 
            d = c("<div>").addClass("weapon")
                          .append(c("<p>").addClass("weapon-empty").text(w.yf))
                          .click(da); 
            d = c("<div>").addClass("weapon-panel")
                          .append(d)
                          .append(e)
                          .append(c("<div>").addClass("clearfix")); 
            e = c("<div>").addClass("consumable-panel"); 
            f = c("<div>").addClass("consumable")
                          .click(L)
                          .append(c("<p>").text(w.yf)); 
            f = c("<div>").addClass("consumable-item")
                          .append(c("<pre>"), f); 
            e.append(f.clone(!0).attr("id", "ammo-bonus")); 
            e.append(f.clone(!0).attr("id", "weapon-bonus"));
            e.append(f.clone(!0).attr("id", "armor-bonus")); 
            e.append(f.attr("id", "gear-bonus")); 
            e.append(c("<div>").addClass("clearfix")); 
            c("#ammo-bonus > pre", e).text(w.BA); 
            c("#weapon-bonus > pre", e).text(w.KB); 
            c("#armor-bonus > pre", e).text(w.DA); 
            c("#gear-bonus > pre", e).text(w.XA); 
            c("#ammo-bonus .consumable", e).data("slot", G.Fa); 
            c("#weapon-bonus .consumable", e).data("slot", G.Hb); 
            c("#armor-bonus .consumable", e).data("slot", G.jb); 
            c("#gear-bonus .consumable", e).data("slot", G.mb); 
            f = c("<div>").addClass("character-loadout");
            f.append(d.clone(!0).attr("id", "primary-weapon").data("slot", B.ha)); 
            f.append(d.attr("id", "secondary-weapon").data("slot", B.xa)); 
            f.append(e); 
            f.append(c("<div>").addClass("clearfix")); 
            aa.qb("weapon", "mouseenter", c("#primary-weapon .weapon", f)); 
            aa.qb("weapon", "mouseenter", c("#secondary-weapon .weapon", f)); 
            aa.qb("weaponmod", "mouseenter", c("#primary-weapon .weapon-summary", f)); 
            aa.qb("weaponmod", "mouseenter", c("#secondary-weapon .weapon-summary", f)); 
            aa.qb("equipment", "mouseenter", c("#ammo-bonus", f)); 
            aa.qb("equipment", "mouseenter", c("#armor-bonus", f)); 
            aa.qb("equipment", "mouseenter", c("#weapon-bonus", f)); 
            aa.qb("gear", "mouseenter", c("#gear-bonus", f)); 
            return f
        }; 
        
        d.Ea = function () { 
            wa("#primary-weapon"); 
            wa("#secondary-weapon"); 
            ta("#ammo-bonus"); 
            ta("#weapon-bonus"); 
            ta("#armor-bonus"); 
            ta("#gear-bonus") 
        }

    })(V.Ef = V.Ef || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires game.character.js
     @requires ui.tooltip.js
     @requires view.utilities.js
     @requires view.weaponselector.js
    */
    V = V || {}; jQuery191(function () { V.Xa.initialize() });
    (function (d, c) {
        function e() {
            var d = c.extend({}, { "kit-health": O.$A, "kit-shield": O.hi, "kit-melee": O.fB, "grenade-count": O.ZA, "shield-recharge": O.xB, "power-recharge": O.nB, "damage-reduction": "Damage Reduction" }), 
            e = c("<tbody>"), g; 
            for (g in d) 
                e.append(c("<tr>").attr("id", g).append(c("<td>").addClass("stat-id").text(d[g] + ":")).append(c("<td>").append(c("<span>").addClass("stat-tip" + ("kit-health" == g ? " health" : ""))))); 
            d = c("<div>").addClass("character-toolbar"); 
            e = c("<div>").addClass("character-stats").append(c("<div>").addClass("stat-table").append(c("<table>").append(e))).append(d); 
            d = c("<div>").addClass("character-image").append(c("<img>").attr("height", 280)); 
            g = c("<div>").addClass("character-profile"); 
            g.append(d, e); 
            return g
        } 
        
        function P() { 
            d.Ea(); 
            c("#character-builder").fadeIn("fast") 
        } 
        
        function s(d, e, g) { 
            var n = c("<tr>"), m = c("<td>").addClass("bonus-value"); 
            0 > d ? m.append(c("<span>").addClass("debuff").text("-" + e)) : m.append(c("<span>").addClass("buff").text("+" + e)); n.append(m); 
            n.append(c("<td>").text(g)); return n 
        } 
        
        function K(d) {
            for (var e = c("<div>").addClass("builder-tip character-tip"), g = c("<tbody>"), n = 0; n < d.length; n++) { 
                var p = d[n]; 
                "power" == p.type ? m.Uc(g, p) : m.Vc(g, p) 
            } 
            0 < d.length && (d = c("<table>").addClass("tip-bonus-table").append(g), e.append(c("<h3>").text(O.Wc)).append(d)); 
            return e
        } 
        
        function g() {
            var d = p.Gg(), e = Core.format("{0}/{1}", m.va(d.ui, 0), m.va(d.ti, 0)); c("#kit-melee .stat-tip").text(e); A.Aa(c("#kit-melee .stat-tip")); for (var e = c("<div>").addClass("builder-tip character-tip"), g = ["health", "armor", "barrier", "shield"], n = c("<tr>").append(c("<td>").addClass("stat-id").text("Light")),
                q = c("<tr>").append(c("<td>").addClass("stat-id").text("Heavy")), s = 0; s < g.length; s++) { var u = p.Gg({ ea: g[s] }); n.append(c("<td>").append(c("<span>").addClass(g[s]).text(m.va(u.ui, 0)))); q.append(c("<td>").append(c("<span>").addClass(g[s]).text(m.va(u.ti, 0)))) } s = c("<table>").append(c("<tbody>").append(n, q)); e.append(c("<h3>").text(O.P), s); s = m.uf(d.i); !1 !== s && e.append(c("<h3>").text(O.Af), s); 
                if (0 < d.C.length) {
                    g = c("<tbody>"); for (s = 0; s < d.C.length; s++)n = d.C[s], "power" == n.type ? m.Uc(g, n) : m.Vc(g, n); d = c("<table>").addClass("tip-bonus-table").append(g);
                    e.append(c("<h3>").text(O.Wc)).append(d)
                } A.ba(c("#kit-melee .stat-tip"), e, { location: "bottomRight" })
        } 
        
        function z() {
            var d = p.Kg(), e = 0 <= d.value ? "+" : "-", e = e + (m.va(Math.abs(100 * d.value), 0) + "%"); 
            c("#power-recharge .stat-tip").text(e); 
            var e = c("<div>").addClass("builder-tip character-tip"), g = c("<tbody>"), n = p.get_base_encumbrance(); 
            g.append(s(n, m.va(100 * n, 0) + "%", p.Hg())); 
            var n = p.Qa(D.ha), q = Z[n.type][n.index], u = p.Fc(n); 
            g.append(s(-u, m.va(100 * u, 0) + "%", q.name + " " + m.rank_codes[n.ia])); 
            n = p.Qa(D.xa); -1 != n.type && (q = Z[n.type][n.index], u = p.Fc(n), g.append(s(-u, m.va(100 * u, 0) + "%", q.name + " " + m.rank_codes[n.ia]))); 
            for (n = 0; n < d.C.length; n++)
                q = d.C[n], "power" == q.type ? m.Uc(g, q) : m.Vc(g, q); 
            d = c("<table>").addClass("tip-bonus-table").append(g); 
            e.append(c("<h3>").text(O.Wc)).append(d); 
            A.Aa(c("#power-recharge .stat-tip")); 
            A.ba(c("#power-recharge .stat-tip"), e, { location: "bottomRight" })
        } 
        
        function fa() {
            var d = p.$o(), e = p.has_barrier(); 
            c("#kit-shield .stat-id").text((e == n.rb ? O.hi : O.wB) + ":"); 
            c("#kit-shield .stat-tip").removeClass("barrier shield").addClass(e == n.rb ? "barrier" : "shield").text(m.va(d.value, 0)); 
            A.Aa(c("#kit-shield .stat-tip")); 
            0 < d.C.length ? A.ba(c("#kit-shield .stat-tip"), K(d.C), { location: "bottomRight" }) : A.ba(c("#kit-shield .stat-tip"), O.Xc, { location: "bottomRight" })
        } 
        
        function u() { 
            var d = p.get_shield_recharge_rate(); 
            c("#shield-recharge .stat-tip").text(m.va(d.HC) + " sec"); 
            var e = Core.format(O.yB, m.va(d.IC)), 
                e = K(d.C).prepend(c("<p>").text(e)); 
            A.Aa(c("#shield-recharge .stat-tip")); 
            0 < d.C.length ? A.ba(c("#shield-recharge .stat-tip"), e, { location: "bottomRight" }) : A.ba(c("#shield-recharge .stat-tip"), O.Xc, { location: "bottomRight" }) 
        }

        var p = h.Xa, 
            A = R.Tc, 
            m = V.Xd, 
            ha = h.Cb.Re, 
            O = a, 
            n = h.Xa.lf, 
            Z = h.Ya.Df, 
            D = h.Xa.aa, 
            ca = null, 
            ja = null; 
            
        d.initialize = function () {
            ca = e(); 
            c("#build-summary").append(ca); 
            ja = V.Ef.mm(); 
            c("#build-summary").append(ja); 
            c("#character-builder").on("kitSelected.View.KitSelector", P); 
            c("#character-builder").on("show.View.KitSelector", function () { c(this).trigger("closing.View.Character"); c(this).hide() }); c("#character-builder").on("weaponSelected.View.WeaponSelector", z); c("#character-builder").on("weaponModSelected.View.WeaponSelector",
                function () { g(); z() }); c("#character-builder").on("armorEquipmentSelected.View.WeaponSelector", function () { z(); fa(); u() }); c("#character-builder").on("equippedWeaponChanged.View.WeaponSelector", g); c("#character-builder").on("gearEquipmentSelected.View.WeaponSelector", d.Ea); c("#character-builder").on("weaponEquipmentSelected.View.WeaponSelector", g); c("#character-builder").on("powerChanged.View.PowerSelector", d.Ea)
        }; 
        
        d.Ea = function () {
            var d = p.ap(); 
            c(".character-image img").attr("width", 140 * ha[p.He()].length).attr("src", Core.mediaUrl + "images/textures/" + d.d).css("left", -140 * d.index); 
            d = p.Wo(); 
            c("#kit-health .stat-tip").text(m.va(d.value, 0)); 
            A.Aa(c("#kit-health .stat-tip")); 
            0 < d.C.length ? A.ba(c("#kit-health .stat-tip"), K(d.C), { location: "bottomRight" }) : A.ba(c("#kit-health .stat-tip"), O.Xc, { location: "bottomRight" }); 
            fa(); 
            g(); 
            c("#grenade-count").hide(); 
            if (p.has_grenade_power()) {
                var d = p.Vo(), e = p.evolved_grenade_power(); 
                c("#grenade-count .stat-tip").text(e ? d.value : 0); 
                A.Aa(c("#grenade-count .stat-tip")); 
                e && 0 < d.C.length ? A.ba(c("#grenade-count .stat-tip"), K(d.C), { location: "bottomRight" }) : A.ba(c("#grenade-count .stat-tip"), O.Xc, { location: "bottomRight" }); 
                c("#grenade-count").show()
            }
            c("#damage-reduction").hide();
            if (p.has_DR_power()) {
                var d = p.get_damage_reduction();
                c("#damage-reduction .stat-tip").text(Math.round(d.value*100*5/7)+"%");
                A.Aa(c("#damage-reduction .stat-tip"));
                0 < d.C.length ? A.ba(c("#damage-reduction .stat-tip"), K(d.C).append(c("<tr>").text("Out-of-cover modifier applied.")), { location: "bottomRight" }) : A.ba(c("#damage-reduction .stat-tip"), O.Xc, { location: "bottomRight" });
                c("#damage-reduction").show();
            }
            u(); 
            z()
        }
    })(V.Xa = V.Xa || {}, jQuery191);
    /*
     Copyright 2013
    
     @requires game.character.js
     @requires game.kits.js
     @requires locale.en.js
     @requires ui.image.js
     @requires ui.tabs.js
    */
    V = V || {}; jQuery191(function () { V.ih.initialize() });
    (function (d, c) {
        function e() {
            for (var d = [], e = 0; e < m.length; e++) {
                var g = c("<div>").addClass("scroll-panel").attr("id", ha[e]), p = c("<ul>").addClass("kits"); c.each(m[e], function (d, g) { var n = A.Lb(Core.mediaUrl + "images/textures/MP_" + ha[e] + ".png", 140 * m[e].length, 280, "kit"), n = c("<div>").addClass("kit-frame").append(n.css("left", -140 * d)), n = c("<li>").data("kit", d).append(n).append(c("<p>").addClass("kit-name").text(g.name)).click(P); 0 == p.children().length && n.addClass("scroll-start"); p.append(n.hide()) }); var s = c("<div>").addClass("scroll-left").append(c("<a>").addClass("arrow arrow-left").click(z).hide()),
                    u = c("<div>").addClass("scroll-right").append(c("<a>").addClass("arrow arrow-right").click(fa).hide()); g.append(s).append(p).append(u); d.push(g)
            } return d
        } function P() { p.Lw(O, c(this).data("kit")); u(); c("#character-select").hide(); c("#character-builder").trigger("kitSelected.View.KitSelector") } function s() {
            var d = c("ul", this).filter(":first"); if (d) {
                var e = c(d).children(), d = Math.floor(c(d).width() / c(d).children(":first").width()); c(".arrow", this).hide(); if (e.length <= d) c(e).each(function () { c(this).show() });
                else { for (var g = null, m = 0; m < e.length; m++)null != g || m != e.length - d && !c(e[m]).hasClass("scroll-start") || (g = m), c(e[m]).hide(), null !== g && m < g + d && c(e[m]).show(); 0 != g && c(".arrow-left", this).show(); g + d < e.length && c(".arrow-right", this).show() }
            }
        } function K() { for (var c = 0; c < ha.length; c++)if (this.id == ha[c]) { O = c; p.Mw(c); break } } function g(e) { e.preventDefault(); p.character_is_chosen() && (p.$m(), c("#character-builder").trigger("show.View.KitSelector"), c("#character-select").show(), u(), d.Ea()) } function z() {
            for (var d = c(this).parent().siblings("ul"),
                e = Math.floor(d.width() / d.children(":first").width()), g, m = null, d = d.children(), p = 0; p < d.length; p++)if (c(d[p]).is(":visible")) { g = p; m = p + e - 1; break } 0 < g && (g--, c(d[m]).hide(), c(d[g]).show().addClass("scroll-start"), c(d[g + 1]).removeClass("scroll-start"), c(this).parent().siblings(".scroll-right").children("a").show(), 0 == g && c(this).fadeOut("fast"))
        } function fa() {
            for (var d = c(this).parent().siblings("ul"), e = Math.floor(d.width() / d.children(":first").width()), g, m = null, d = d.children(), p = 0; p < d.length; p++)if (c(d[p]).is(":visible")) {
                g =
                p; m = p + e - 1; break
            } m < d.length - 1 && (m++, c(d[g]).hide().removeClass("scroll-start"), c(d[g + 1]).addClass("scroll-start"), c(d[m]).show(), c(this).parent().siblings(".scroll-left").children("a").show(), m == d.length - 1 && c(this).fadeOut("fast"))
        } function u() { c("#reset-kit").siblings().remove(); p.character_is_chosen() && c("#reset-kit").after(c("<span>").addClass("kit-name").text(p.Hg())).after(c("<span>").text(" > ")) } var p = h.Xa, A = R.Image, m = h.Cb.Re, ha = h.Cb.Oh, O = -1; d.initialize = function () {
            var m = [a.AA, a.GB, a.QA, a.vB, a.cB, a.JB]; c("#reset-kit").text(a.tB).click(g);
            if (Core.isIE(6) || Core.isIE(7) || Core.isIE(8)) { var p = c("<div>").addClass("error-panel").append(c("<p>").addClass("error").text(a.PA)).append(c("<p>").text(a.OA)); c("#character-select").before(p); c("#reset-kit").hide() } else p = e(), c("#character-select > ul").after(p), c("#character-select > ul a").each(function (d, e) { for (var g = 0; g < ha.length; g++)if (c(e).attr("href") == "#" + ha[g]) { c(e).attr("id", "spec-" + g); c(e).text(m[g]); break } }), c(window).on("resize", function () { c(".scroll-panel:visible").each(function () { c(this).trigger("UI.Tabs.paint") }) }),
                R.$h.ba(c("#character-select")).addClass("ui-tabs-vertical"), c(".ui-tabs-panel").on("UI.Tabs.selected", K), c(".ui-tabs-panel").on("UI.Tabs.paint", s), A.qb("kit", "loadImages.View.KitSelector", c("#character-select")), A.qb("kit", "mouseenter", c("#reset-kit")), c("#character-select").show(), d.Ea()
        }; d.Ea = function () {
            p.character_is_chosen() ? (u(), c("#character-select").hide(), c("#character-builder").trigger("kitSelected.View.KitSelector")) : (c("#character-select").trigger("loadImages.View.KitSelector"), O != p.He() && (O = p.He(), c(".scroll-panel").hide(),
                c("#spec-" + O).click()))
        }
    })(V.ih = V.ih || {}, jQuery191);
})();
//# sourceMappingURL=me3-builder-min.js.map
