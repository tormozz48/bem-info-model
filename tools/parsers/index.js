module.exports = {
    get: function() {
        return {
            title: {
                en: "Parsers",
                ru: "Парсеры"
            },
            route: {
                conditions: {
                    group: "parsers"
                }
            },
            type: "group",
            items: [
                getGonzales()
            ]
        }
    }
};

var getGonzales = function() {
    return {
        title: "gonzales",
        route: {
            conditions: {
                lib: "gonzales"
            }
        },
        source: {
            en: {
                title: "gonzales",
                createDate: "03-10-2012",
                editDate: "",
                summary: "Gonzales is fast CSS parser.",
                thumbnail: "http://soulshine.in/svgo.svg",
                authors: ["kryzhanovsky-sergey"],
                tags: [],
                translators: [""],
                content: "https://github.com/css/gonzales/tree/master/README.md"
            },
            ru: {
                title: "gonzales",
                createDate: "03-10-2012",
                editDate: "",
                summary: "Gonzales — быстрый парсер CSS.",
                thumbnail: "http://soulshine.in/svgo.svg",
                authors: ["kryzhanovsky-sergey"],
                tags: [],
                translators: [""],
                content: "https://github.com/css/gonzales/tree/master/README.ru.md"
            }
        }
    }
};
