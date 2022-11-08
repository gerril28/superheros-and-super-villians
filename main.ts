input.onButtonPressed(Button.A, function () {
    basic.showString("" + (list[1]))
})
input.onButtonPressed(Button.AB, function () {
    p1 = list[1]
    p2 = Villians[0]
    if (p1 == p1) {
        basic.showString("" + (p1))
        basic.showString("Win")
    } else {
        basic.showString("" + (p2))
        basic.showString("Win")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Villians[0]))
})
let p2 = ""
let p1 = ""
let Villians: string[] = []
let list: string[] = []
list = [
"Spiderman",
"Batman",
"Superman",
"Flash",
"Hulk"
]
let Ranking_1 = [
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
