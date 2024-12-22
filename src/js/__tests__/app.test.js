const {
    Character,
    Bowerman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie
} = require('../app');

describe('Character', () => {
    test('should level up and increase stats correctly', () => {
        const bowman = new Bowerman('Test');
        bowman.levelUp();
        expect(bowman.level).toBe(2);
        expect(bowman.attack).toBe(30);
        expect(bowman.defence).toBe(30);
        expect(bowman.health).toBe(100);
    });

    test('should throw error if try to level up a dead character', () => {
        const deadCharacter = new Bowerman('Dead');
        deadCharacter.health = 0;
        expect(() => deadCharacter.levelUp()).toThrow('Cannot level up a dead character');
    });

    test('should take damage correctly and reduce health', () => {
        const swordsman = new Swordsman('Test');
        swordsman.damage(50);
        expect(swordsman.health).toBe(55);
    });

    test('should not allow health to go below 0 after damage', () => {
        const magician = new Magician('Test');
        magician.damage(200);
        expect(magician.health).toBe(0);
    });

    test('should create character with correct properties', () => {
        const char = new Character('Test', 'Bowman');
        expect(char.name).toBe('Test');
        expect(char.type).toBe('Bowman');
        expect(char.health).toBe(100);
        expect(char.level).toBe(1);
        expect(char.attack).toBe(25);
        expect(char.defence).toBe(25);
    });

    test('should throw error for incorrect character type', () => {
        expect(() => new Character('Test', 'InvalidType')).toThrow('Invalid type: must be one of Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
    });

    test('should throw error for invalid name', () => {
        expect(() => new Character('T', 'Bowman')).toThrow('Name must be a string with a length between 2 and 10 characters');
        expect(() => new Character('TestTestTest', 'Bowman')).toThrow('Name must be a string with a length between 2 and 10 characters');
        expect(() => new Character(123, 'Bowman')).toThrow('Name must be a string with a length between 2 and 10 characters');
    });
});

describe('Bowerman', () => {
    test('should create Bowerman with correct properties', () => {
        const bowman = new Bowerman('Test');
        expect(bowman.name).toBe('Test');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });
});

describe('Swordsman', () => {
    test('should create Swordsman with correct properties', () => {
        const swordsman = new Swordsman('Test');
        expect(swordsman.name).toBe('Test');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });
});

describe('Magician', () => {
    test('should create Magician with correct properties', () => {
        const magician = new Magician('Test');
        expect(magician.name).toBe('Test');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });
});

describe('Daemon', () => {
    test('should create Daemon with correct properties', () => {
        const daemon = new Daemon('Test');
        expect(daemon.name).toBe('Test');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });
});

describe('Undead', () => {
    test('should create Undead with correct properties', () => {
        const undead = new Undead('Test');
        expect(undead.name).toBe('Test');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });
});

describe('Zombie', () => {
    test('should create Zombie with correct properties', () => {
        const zombie = new Zombie('Test');
        expect(zombie.name).toBe('Test');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});
