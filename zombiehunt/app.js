new Vue({
    el : "#app",
    data: {
        player_heal : 100,
        zombie_heal : 100,
        super_attack_counter : 3,
        heal_up_counter: 3,
        is_attack : false,
        logs : []
    },
    methods: {
        start_game() {
            this.is_attack = true
        },
        attack() {
            var damage = Math.ceil(Math.random()* 10);
            this.zombie_heal -= damage;
            this.zombie_attack();
            this.add_to_log({turn : "YOU", type : "ATTACKED", point : + damage});

        },
        heavy_attack() {
            var damage = Math.ceil(Math.random()* 25);
            this.zombie_heal -= damage;
            this.zombie_attack();
            this.add_to_log({turn : "YOU", type : "SUPER ATTACKED", point : + damage});
            this.super_attack_counter -= 1
        },
        zombie_attack() {
            var damage = Math.ceil(Math.random()* 15);
            this.player_heal -= damage;
            this.add_to_log({turn : "ZOMBIE", type : "ATTACKED", point : + damage});
        },
        healme() {
            var heal = Math.ceil(Math.random() * 30);
            this.player_heal += heal;
            this.zombie_attack();
            this.add_to_log({turn : "YOU", type : "HEALED YOURSELF", point : + heal});
            this.heal_up_counter -= 1
        },
        runaway() {
            this.is_attack = false
            this.player_heal = 100
            this.zombie_heal = 100
            this.super_attack_counter = 3
            this.heal_up_counter = 3
            this.logs = []
        },
        add_to_log(log) {
            this.logs.push(log);
        }
    },
    watch: {
        player_heal : function(value){
            if(value <= 0) {
                this.player_heal = 0;
            } else if (value >= 100) {
                this.player_heal = 100;
            }
        },
        zombie_heal : function(value){
            if(value <= 0) {
                this.zombie_heal = 0;
            }
        }
    }
})