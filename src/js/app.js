class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error(
                'Name must be a string with a length between 2 and 10 characters'
            );
        }

        const validTypes = [
            'Bowman', 
            'Swordsman', 
            'Magician', 
            'Daemon', 
            'Undead', 
            'Zombie'
        ];

        if (!validTypes.includes(type)) {
            throw new Error(
                'Invalid type: must be one of Bowman, Swordsman, Magician, Daemon, Undead, Zombie'
            );
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch (type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error(
                'Cannot level up a dead character'
            );
        }

        this.level += 1;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        const actualDamage = points * (1 - this.defence / 100);
        this.health = Math.max(0, this.health - actualDamage);
    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman');
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}

module.exports = {
    Character,
    Bowerman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie
};
