export const projects = [
    {
        title: "Scaffcode",
        description:
            "Sebuah game-based learning yang menerapkan teori konstruktivisme scaffolding untuk memperkenalkan konsep dasar pemrograman terkhusus pada anak SMA. Dibuat menggunakan Godot Game Engine.",
        image: require("./assets/scaffcode.png"),
        link: "https://jahnsmichael.itch.io/scaffcode-inc",
        techs: [
            "#Godot Engine",
        ],
    },
    {
        title: "Pilar",
        description:
            "Sebuah aplikasi e-dagang sederhana yang dapat mengakomodasi pengelolaan produk oleh admin dan pembelian produk oleh pelanggan. Dilengkapi juga dengan adanya pengelolaan program beserta donasinya",
        image: require("./assets/pilar.png"),
        link: "https://play.google.com/store/apps/details?id=com.pilar.mobile",
        techs: [
            "#Django REST Framework",
            "#PostgreSQL",
            "#Docker",
            "#React",
            "#Flutter",
        ],
    },
    {
        title: "Jarvis Healhchecker",
        description:
            "Aplikasi untuk mengecek keadaan kesehatan dengan menggunakan decision tree algorithm.",
        image: require("./assets/jarvis.png"),
        link: "https://jarvis-healthchecker.herokuapp.com/",
        techs: [
            "#Django",
        ],
    },
];

export const profile =
{
    image: require("./assets/profile.jpeg"),
};