db = connect("localhost:27017/mongo");
filmstrip = db.createCollection("Filmstrip");
filmstrip.insertMany([
    { 
        href: '#',
        img: { 
            src: "./_8.jpg",
            desc: "Lanterns"
        },
        title: "Lanterns"
    },
    { 
        href: '#',
        img: { 
            src: "./_9.jpg",
            desc: "Gas Meter"
        },
        title: "Gas Meter"
    },
    { 
        href: '#',
        img: { 
            src: "./3b.jpg",
            desc: "Tractor"
        },
        title: "Tractor"
    },
    { 
        href: '#',
        img: { 
            src: "./3d.jpg",
            desc: "Latte"
        },
        title: "Latte"
    },
    { 
        href: '#',
        img: { 
            src: "./5b.jpg",
            desc: "Tulips"
        },
        title: "Tulips"
    },
    { 
        href: '#',
        img: { 
            src: "./5c.jpg",
            desc: "Painting"
        },
        title: "Painting"
    },
    { 
        href: '#',
        img: { 
            src: "./18.jpg",
            desc: "Birds"
        },
        title: "Birds"
    },
    { 
        href: '#',
        img: { 
            src: "./32.jpg",
            desc: "Lake"
        },
        title: "Lake"
    },
    { 
        href: '#',
        img: { 
            src: "./35.jpg",
            desc: "Skyscraper"
        },
        title: "Skyscraper"
    },
    { 
        href: '#',
        img: { 
            src: "./38.jpg",
            desc: "Castle"
        },
        title: "Castle"
    },
    { 
        href: '#',
        img: { 
            src: "./41.jpg",
            desc: "Sky"
        },
        title: "Sky"
    },
    { 
        href: '#',
        img: { 
            src: "./46.jpg",
            desc: "Window"
        },
        title: "Window"
    },
    { 
        href: '#',
        img: { 
            src: "./48.jpg",
            desc: "Mall"
        },
        title: "Mall"
    },
    { 
        href: '#',
        img: { 
            src: "./49.jpg",
            desc: "Snail"
        },
        title: "Snal"
    },
    { 
        href: '#',
        img: { 
            src: "./50.jpg",
            desc: "Snail"
        },
        title: "Snail"
    },
    { 
        href: '#',
        img: { 
            src: "./51.jpg",
            desc: "Hive"
        },
        title: "Hive"
    },
    { 
        href: '#',
        img: { 
            src: "./53.jpg",
            desc: "Christmax Decoration"
        },
        title: "Christmax Decoration"
    },
    { 
        href: '#',
        img: { 
            src: "./57.jpg",
            desc: "Swarm"
        },
        title: "Swarm"
    },
    { 
        href: '#',
        img: { 
            src: "./60.jpg",
            desc: "Nature"
        },
        title: "Nature"
    },
]);
users = mongo.createCollection("Users");

users.insertMany([
    { dob: '07/04/1992', first_name: 'lin', gender: 'female', last_name:'lin' }
]);
