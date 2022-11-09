input.onButtonPressed(Button.A, function () {
    index = randint(0, 4)
    basic.showString("" + (list[index]))
    list = p1
})
input.onButtonPressed(Button.AB, function () {
    if (list[p1] == list[p1]) {
        basic.showString("" + (list[p1]))
        basic.showString("Win")
        p1 = randint(0, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    let p2: string[] = []
    index = randint(0, 4)
    basic.showString("" + (Villians[index]))
    Villians = p2
})
let p1: string[] = []
let index = 0
let Villians: string[] = []
let list: string[] = []
list = [
"Batman",
"Spiderman",
"Superman",
"Flash",
"Hulk"
]
let Rating_1 = [
"a",
"b",
"c",
"",
""
]
Villians = [
"Thanos",
"Joker",
"Dr Doom",
"Venom",
"Harley Quinn"
]
let Rating_2 = [
"a",
"b",
"c",
"",
""
]
