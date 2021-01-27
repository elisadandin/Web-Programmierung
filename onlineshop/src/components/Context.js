import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Resistance Band",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6-MbQhULhxtcYrfFrc-UAl_3VsmOftkhXln8OXL_KEXzamcAsXs4M3EP0Cdg_3R071olb-0A&usqp=CAc",
                "description": "Fitness Band for functional Training",
                "content": "Fitnessband (32 cm) in verschiedenen Widerstandsstärken, für das gezielte Training kleiner Muskelketten geeignet",
                "price": 29.99,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Dumbbells - light",
                "src": "data:image/jpeg;base64,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",
                "description": "5kg Hanteln",
                "content": "KURZHANTEL 2er Set, für ein effektives Ganzkörper-Workout",
                "price": 19.99,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Dumbbells - heavy",
                "src": "data:image/jpeg;base64,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",
                "description": "15kg Hanteln",
                "content": "KURZHANTEL 2er Set, für ein effektives Ganzkörper-Workout",
                "price": 24.99,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Fitness Mat",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KOzy7qc565pEGFg-4dJayKsGmbnIE8NRZdkbF3Ytsvo7FLfzWzRiaWz4Xkx4np-1wD9NXp0&usqp=CAc",
                "description": "Die bequeme Fitnessmatte",
                "content": "Fitnessmatte in Premium Qualität, Rutschfeste Trainingsmatte",
                "price": 39.99,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Skipping Rope",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphm4xXNUCbhGim42k5-pS85YuviFahP7zgFHUYdLxGM4NUTDCiaSgCfVL5I3QQXZjV8SVBqI&usqp=CAc",
                "description": "Springseil Sport",
                "content": " Profi-Springseil, das mit CrossFit-Sportlern entwickelt wurde",
                "price": 14.99,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Boxing Gloves",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4si1CP73SLRLlW51U6UemMng3-cr-Fc3Bjb6iqL-w_EL1Wj3OIupvJNEx1D7y3P7DNzuQPb2S&usqp=CAc",
                "description": "Leder Boxhandschuhe",
                "content": "Der widerstandsfähige Allroundboxhandschuh aus Leder ist ein ausgereifter Handschuh, der breite Klettverschluß fixiert und stabilisiert das Handgelenk.",
                "price": 49.99,
                "count": 1
            },
            {
                "_id": "7",
                "title": "Punshing Bag",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVp_OR7hWEyeAtjc00DIf3hq3igeoPTt7ZnTJ8luOltuPeRasPUgm0iPkyOudDiib_1OO3zQ&usqp=CAc",
                "description": "Boxsack mit einer Länge von 84 cm",
                "content": "Strapazierfähiger robuster Vinyl-Boxsack mit verstärktem Gurtband. Die Heavy-Bag-Konstruktion bietet lange Haltbarkeit und Funktionalität.",
                "price": 99.99,
                "count": 1
            },
            {
                "_id": "8",
                "title": "Pull Up Bar",
                "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXFRgYGBgYGBcXFhYYFRcXFxUXGBcaHSggGBolGxYVITEiJSorLi4vFx8zODMtNygtLisBCgoKDg0OGhAQGC8lHyUtKzItLS0tLSstLS0tLy8wLS0tLS8tLS0tLS0tLS0tLS0uLS8tLS0vLS0tLSstLS01Lf/AABEIAOIA3wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCCAH/xABKEAABAwICBAsDCgMHAgcAAAABAAIDBBESIQUGMVEHEyIyQWFxgZGhsSMzchRCUmKCkqKywdFDU+EkRHN0s8LwFTQWJWOD0vHy/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EADIRAAIBAgQDBQgBBQAAAAAAAAABAgMRBBIhMTJBgQUTM1FhIjRCcZGxwdEUFSOh4fD/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBERAEREAREQBERAEREAREQBFFdY9faOkfxJfxs5IAijzcCcxjdzWC2eZvboKqfS/CVW1shYx3EQWeQyIkSPDWktxy5O2gZNwjoN1htIw3YtvWLXuipCWPk4yUAkxRWe9oaLkvzswfER1Kr6/hNq6t7g3+zxNaXNZG48Y44g1uOUWNhe5DbbNpUD0Q27nt2mSJ7RfaXGz/E4T4rxo6rayQF3NPJcdwdlfuNj3KDd7ow+aL94Ndb3VbXQzH2zBiDvps2XP1gbX7QpyqM4OI5GaSiyNiHgkbC0sOYPSCQCrzUosymERFIyEREAREQBERAEREAREQBERAEREAREQBFgrKyOJhkle1jBtc9wa0dpKrrWjhbhjuyibx7/AOYbtiaerpk7sutASTXTXim0cGiXG+R4JZGwAuIGRcSSA1tztJ32Bsqj1n4QK2qqBCX8RBjYx8cTjdwLhiD5bBzhmRlhB3KL6z6SqKmXj6l5c97bNJFgGtJs1oGVgXHxWnpaS7hKNkoDr7ngWe3tBF+9Ql5GJb2PcEojqMRAAEpv0AAuIPqVha8wS7LmN9iN4G3xafNbTaKStkHyaN0krrcZE0Zh3S8E5Bh23JFlYervBDUTtY7SDxEALBsZDpi3oa9+bBbqxHrWEr/kilf7MrOeJzJGujJc0nFE5oJOXRYfOGwhTbQ3BlWVp40xmjY4XPGtvcnpZGHBwB22dht1q59WtUaKhbamga1x2vPKkd2vOfdsXWqquOMXe4NHX09g6VmyWrZm3Nkd1O1Hp6BowvklkAtjkdkL7Qxg5LB4nrUoJUeq9ZxsiZf6zsh3DafJcOs0hLJz3kjcMm+A2961KmOpQ0jqRdRLYldZp2CPLFiO5ufnsHis+jdIMmaXNuLGxB2gqCAKTaoc2T4h6KrD4ydWrlexGFRuRIURF0y4IiIAiIgCIiAIiIAiLzJIGgucQABckmwAHSSdiA9L8cbZlVxrTwwUdPdlN/apN7TaEdslji+yD2qndadd66uxcfORHfKGPkRAZZEDN/2iUBeGsPCro+mkETXPqJMVi2ANcGnre4ht+oE26bLjaw8L0Ybho4y552vlFo2bwADd5B7usqh2PDXtdkBYjs/4F0aYTzOwwRPkO9rS6w3noaOs5IZOvpvTU9S7jKqcv3Yua34WDILjyaYDco2XdsBIub9Td62YtByfJpKtxikY2YU7rOx4XuYHhwI5JbnhuCRdSLgt0JFUzVkGJ0cz6O8MjSWmMh4DyLbzgB6i4dKA/dSuD2t0i8yVPGwwYXWkcAHOeMg1sbs7X27BkRdT/VzgZp4bmpnfUAm5jA4uI2ORc25cT9oKTak6POjqCOCplj4xpe5xaSRy3ufYXF3bdyz1mtA2RMv1uyHhtPkqatenT4mQlJLc7GjtHQ08YjhiZFGPmsaGt6zYeq1a3T0MeQdjO5ufidiilXpCWXnvJG7Y3wH6rVXOq9ov4F9Sp1fI7FZrHM/JtmDqzd4n9lyXOJNySTvJufErygXPnWnUftO5U5N7noISvxfoUDB+qTan82T4h6KNKS6n82T4h6LcwPjLqWUuIkKIi7xshERAEREARFq6R0lDAwyTysiYPnPcGjxJzPUgNpYqqpZG0vke1jGi5c4hrQOsnIKqNaeGuJt2UEXGnP20l2xdrWc9/fh71Uen9YqqtdiqZ3SZXa0m0bdvNjHJG3bt60BcutXDPTxYmUTPlDwPeOuyAHqPOk7rD6yqPWTWusrXH5TO5zeiNvIiHYwbe11z1rgGQbTsI8F3NXNUK+uI+T07i3+a7kRffdztmxtyhk4hfkDu/wCFZaGjlnfxcET5XH5sbS8577bB2q69WOBGFln10pmdtMUd2Rdhdzn/AIexWLTR0dEwRxMjhaPmMaAT1kDMnrKxKSirtmG0imNWeBSqls6slbAzLkMs+a24nmMOz6SuDVbVGj0dE5lPHhDrcY9xxPfYWBe49GZyFhmclr1etB2RMt9Z3/xH7riVVZJIeW8u6ujwGS0anaFOOkdSt1VyOXrDq1Q02jq6Cmc97pXGcNJBax8ZD2MYQAAwYbWzNulVhqbpcU1VFNjwtu5jnAXIZILDzt4K0NMUnG08sQ2ujcB22u3zAVIxHIgZXaCOqw/+1LDVnXjLN/gzCWZMvyQkkkkk9JJuT3leVG9E650kmGN8ojlDWBwk5LXEtHNfsz67FSF8gAuSOrr7N641WnKnK0ka0k1uekWuaq/NaT6LDIyQ7XW6gqWyJtPlaNpCxGub0AlYXxMYLvLQes5nuWnJpBg5rS78I/fyRJvYHaidcA717AWKikxRtcRa4vZZ1IyFJdUObJ8Q9FGlJdUObJ8Q9FuYHxl1LKfESFERd42QiLiaya10dC3FUzsYbXDOdI74WDM9uxAdtczTusFLRs4ypmZE3oxHlOt0MaOU89QBVMa1cNVRJdlFGIGfzX2fKfhbm1nfiVX11bJK90ksjpJHbXvcXOO7M9HUhmxbutPDY912UEWEZ+2lFzl0tiGztce5VTpbSk1RJxtRK+V/0nm9huaNjR1ABND6Jqat+Cmgkld9UXDb/SceS0dpVnatcB8r7Orp+Lb/AC4bOf3yEYW9OQB7UBUzMTnBjWlzibNa0El1+gAZkqdatcEukaqzpGilj3yj2tuqIZj7WFXTofRmjNGNwU8TGu+cW8uV3xSHPuJsOheazWaR2UbQwbzynfsPNa1XF0qe7+hCU0jn6vcF2jKICSRonkGfGT2LQd7WcxvgT1qQVWskTMowX23clo7z+gUVnmc83e4uPWb+G7uXhc+p2jJ8CsVSqvkdKs03NJ87ANzcvPauci8ueBtK0Z1JTd5O5U5N7npFi4y+weK/cDjtNh1ZKu5G57xgHaqV0zTCKqkZ0CV4HwvONv4X+SuIyxt6b9mf9FWXCTF/aeMAsHxtPfGcB/C5vguh2dNqo0+aLqL1sdnU3RkNZSGKeNr+Jkc0G1nta+zhZ45Vr4unoXqfVqopOVQ1lwP4E1nA9QIFvIdq4+otXaeSO5tLGH9RLCOjpyc/wU0KziZzpVWr6PWz1Qm2pM4sevxisyrpXQP2YrF0R6xbPwuugdKce3EyUObvjOQ7bZjvWWdgc0tcA5p2tcAWntByUbrNVYg7jKeR9PJ9QksPaL3A6gbdSqXcz5ZX9V+yPsv0OticOv1QTgqPu0lWU/8A3EIlYP4sW3tc3+gW7Q6ThqbCJ2Nx2MAtJfcG7T3XUnQktd15ozlZP9Ge5j+ELZWto2Itija4EFrACDkQQMwR0FbK03uVn4pNqhzZPiHooypNqhzZPiHotvA+MupZT4iQrm6S0/SwODZp42OOxpPKtvwjMDr2KnOEXhNrPlM9LTO4iOJ5jc8D2zy3JxBPMbe9rC+w3zUC0NFNUTFkTJZ5HEl2HE95JsCXvOzm7XEDM7F3WzZLg154U42wyxUWJ0paQJbWawkbWA5ucNoyA7VQE9QXuLnuc97jm5xLnuOzMm5JUs1u0bNRyCKeEt5IfnnjG0gSA7W3zwnI9OYKvHVbVejoqWKc0sAmbC3G9g4wkkC5a92ZuenJG0ldh6FI6t8GekqyzhDxMZ/iT3Zl0lrOe7wA61ZuhOCDR1KA+slNQ/LJx4uK4NxaNpxO7HEg7lIq3WKZ+TbRjqzd94/oFyJHkm5JJ3k3PiVzavaUVpBXKZVlyJENOQQsEdNC1rG5AACNg7GgfsuTW6Uml5zyB9FuTf3PetNY3TtHTfszXOq4qrU3ehU6jfMyAIsWNx2Dx/ZY5HNHOf3D9gtchczukA6V5Dydg8f2Woa1o5rb9Zy/qsL6156bdmX9VmzB0XC3OdYeCwmpYNgJ7v1K5xcvwyLNjNjefWuOyw8ytd7ydpJ7VqunC8RzF5swF53NBcfAKSiwbReovr7AHxRu+i8tPZILeoaplSatVsmyAsG+Qhg8M3eS96x8H05oqhzpml7YnPaxjSbuYMQGNxG7ctzC0KqqKVi2EZXTKd0DVcXNTybn4D2Ou3PuefBWSJS44WguN9jQXHwCqYjJ+H6sje//APQV9y8LuiqeGPAHPeWNLo4Y8IY4i7g5zsLRY3BsSujicKq0k72LZwzHPpdWa2XZAWjfIQzy53ku1S8Hj9s1S1o6Qxt/xuy/Coi/hW0tWnBo2gsL2xYXTEdr7NjZ33X63g103pDlaRr+LadrMRkI/wDaYWxDuJWIYKlHfUwqcUd7SFZq/Q+9nE8jfmh5mdfcWx8gd9lXWuOnYNJyRt0XoySOWN4dx0TA2U2uAC2IWaL2diJuLdCtXQPA5ounsXxvqHDpmddv3G2bbtup3R0ccTQyKNkbRsaxoa0dwW1GEYcKsTSSK5oXTGKM1Hv+Lbxt7X4zCOMvbK+K6zrNX+9k/wAR35isK81U4n8zUe5+KTaoc2T4h6KMqTaoc2T4h6LZwPjLqTp8Rqad4OdHVc/yiaEmQ2xYXva2SwsMbQbHIAX6lIdGaMhp2COCJkTB81jQ0duW09a20XeNkq7h/pXGjp5QAWx1Ixm2YbIx7b33XsD1lq5uqevcP/SmwVUj2yROEXGOjeYi1rwYwZWtLWuwYRyiD4qweELRPyrR1VCBdxiLmD68ftI/xNHiqV4KNLcqem+bMxko3YorseO8OafsqnENKlJvyMS4WTaLSULxeORkgP8ALcH+hyXiSd+2waN7lz9I6ApZJReBgdkcTBxb778TLG640mjpWn2dVKB0NltM0dV3crzXn1Tpy2lb5r9GokiQmsZ895cdwGX7L8dpS2TGgduZ8Aow+aqZzoopRvjcWO+6/LzWGTTUbfeNkh/xGED74u0+KsWGb21+RnISR9a921x7Ng8AvAkCaI1emqIRUianip3YrSPksCGktJsMtoO0jYtaWCF9RTUtHWNq5pJmiXimHi4oB7yTGCQSBszt5K6OCqS2RJU2bBnAX5DK6Q2jY6Q7mNc4/hBVoUOplDFsgDzvkJk77OuB3Bd2OINFmgAbgAB4BbEezn8TJKl5lVUeqtdJ/CEY3yOA/C27vJdyj4PSffVB7I22/E6/op4i2YYKlHlcsVOKI/R6m0Uf8LGd8hL/ACOXku5BA1gsxrWjc0ADyWRFsRpxjwqxJJIL8c0EEHYciv1FMyfIumtHmnrJIPoSSw9zXExn7rmK2uBnU2imoxVT0gfKZHgOlu5jmtdyXMYeSB0XttaVweHzRgirYqhoDRLGC6wtifC/C4neS2WMfYUz4BtIY6GSAnOCoeAPqSWkb5uf4ICyIomtAa0BoGwAAADqAXtEJQBFC9IcKeiYsvlQkO6Jr5PNow+aj1bw204uIaOok3F+CNp69pNu5AdOud7WT/Ef+YrBdV1XcItQ9znNihjxOJzc6Qi5v0Wv4LlVGuFW/bUOHVGxrPPauI8BVlJt2Rr91JstsA7ipPqfzZPiHovm81r5Td8krrZ3fI4m42KzuCXWaodVCle/HG5j3coXeCwC1n3uRa+RutrD4KVKale5ZGlld7lxoiLolgK+XXxf9P0yY9jYqss3exqMmnua9p7l9RL584ftFhteyUD39Pn8cJsPIsHcoyipJxfMMlcnvX/VB8mqLV+mqeL3kzAdwOJ33Rcrn6O0TJWQieprZpMbMWBlo23NgWu+l1mwW9Q6ApovdwsvvIxO8XXsuD3dOm2pSbfp+2atkjmO1gdL/wBvSyybnH2bPE/0XiWmr32xyxwtPzYxjda3ST+6ljY1q1rbdzXH0UlXiuCK+4UrbIk2pfBRo/5NTyztkncY2vDZHni2YwHENjbYWvnY32qxtG6Lgp24IIY4m7o2NYPBozKaJiwQRM+jGxvg0BbRcBtXdjtqbR+ouZW6xUcXvKqFvUZG38L3XAruFDRcf94LzuYx5v3kAeayCZIqureGmlHuqaZ5+sWxjxGJcCu4a6o+6pYWfG5z/QtQF4Ivm6v4VdJv/vLIhuYxnqQT5qP1utlXL7ytqH36A9+H7t7ID6nq9IwxZySxs+J7W+pXBreEPRcV8VZGbdDMUn5QV8wudc3wuJ3kp9lo7SgLM4WddaHSEUMcHGF0cjiXluEYHRuaQBe5JcYzs+aonqVrpVaOfK6CNkglY0OEmINxR5McLG97Eg77qPl46XAdg/dBWRDpJ7wEBOK/hX0xJfDJDD/hxhx8ZMS4NXrNpGb3tdUHqEjmN+6whvkuXSzl/uqd0nYHv/KF2KLRGlpPc0Ezev5Ph8HPGaGTlR0z3ZAOPU0ZeQW1HoGY/wAIjrdZv5loz1lViLXzOY4ZFrnOY4dRYBcLVkYTz5h34j6oDuHRGHnzQM7ZA4+DbrwYqRvOq7/4cbneZsF5g1Tldni/KP3W9T6lSHodbfyvQDJQc4rdi5zGTRl3sySNl3ZE7jbxU44JXf8AmkPwSj8BP6Lm0+oh3OHh+pU54OdS5oqtlRjj4uMPBF3cYS9haMrWtne9+hRjWpyeVS1MZk+ZbSIuRrbXTQUc8sDMUrGEtFsXSLuwjbYXdbqVoOq94AuSAN5yCprhjninbKY5GPdTvifZrmucG2wvuAdlnnwUKr9JyyuL5XNc5xuXOw3N+3YOoZLV41zwfaswjaMbMI7RewVVSDnbW1ncOJ2tVtMw/JBHJMxr4/Z2cQHYWm7SB0jDh2da3X6w0zcg57j9VjreJsFwWaCnPzbeSys1VmO2w7XBaU8Ph8zlKW/qitwhfVnQl1sYObE49rmhcus1oe6/JYBa3STYrbj1Nd0vaPE/ot3RWpLJZ2QmQjE4AlrRcC1za/TZIrCJ2Wr6swlTOZXcIukZL3q5AN0bWsA6rtAPiuHWaWqZc5JJX/HIT6lXhTcD9A3nSVD+17W/laF06Xgx0Uz+7Yvjklf5F1l0i0+a5HSfRaO0rHGXuOEPaSdgaLnuAzX1ZR6n6OizjoaZp38Uwu8SLrrw07Gc1jW9gA9EB8l02rVbLzaerf8ADBLbxw2XWpuDPSb9lBL9t8TPzyBfUaID51pOBvSZ+ZTR/HKT+Rjl2KXgQqyPaVsLDuZG+QeJLfRXkiAqKl4C4R72umd8DI2euJdel4FtFt53yiT4pSPyBqsZEBEaPgy0RHa1DGfjLpPHGSu1R6uUcXu6SBlvoxMHoF1EQHlrANgA7F6Xz5rXwhaTbV1MUdUWMjnkY0NjiuGseQLktNzYbVGKrW/ST74q+pz3SFn5LID6b0poWmqBaeCKUf8AqMa71C04aDR1KLtjpYQOnDEy3flZfK1ZpCd/vKiZ/wAUsjvUrmPYNyAvufT9C0m9XTjM7JGHp6iVoVGvGjWZGqaT9VkrvMNt5qjHALyVzv6bTvdtlXco+kqKobLGyRhux7Q5ptYkOFwbHYpbqeeTJ8Q9FXmp9Zip6dnQ2jh7jd4P6eCsPVDmyfEPRUUaPc4vJ/2xCCtMkKIi7BsHEdqlQXLvkkAJJcSGNaSTmSSNpVeVmgqZxc4wsdmSMTQ62eVr7lbFY/Cx7tzXHwBVcSjk+C5XaU3HKk/MprN6GhNBYN7z6BYwxbtSMx2LBhXIua9zHZbeqbb10fxP8o3fstYhdHUSLFWA/RbI7xIb/uWxhdasfmThq0WWiIvSG2EREAREQBERAEREAREQHyrrSW/Las5/91Pu/muXN4scWX4bhrmtPKzu4Ejus13kt3WI/wBsq/8AN1H+s9YaSaPi5I5L2e5jgRYOBZexBIItmQe1DKNGJ7cQODIbQCTe4y2rTqJQ0kCNmW/EfV1vJdypdA2Jj44sDgbFwe92LI4TZxIaQ4N7QTkt2ap0fGGMlo2yAtuXNfK2THsN3A5Z3OEgjco5ieW/MjWmW8XIGg39nG67mtvy2NeRs2AuNlzjM7f6Ld01WcdM+QCwOEAbmtaGtFuwLnOUuRB7l0cGshdCL9ETB/zxVr6oc2T4h6KpeDEex+w1W1qhzZPiHoudL37p+DXXiEhREXRLzR02+0Eh+qR45fqoFL0Ka6zutTuG9zR+IH9FCpNoXE7Tf9xL0NetuYZ9p7liIWWQ5leCFzLlBiK7XBzH7V7t0X5nA/ouJMbNPYfRSXg5j98eqMfmK3MCr1ollLiJqiIvRG2EREAREQBERAEREAREQHyhp4f2qq/zVR/rPXMkC6mmRepqf81Uf6z1znhZAjpXyNy2NDsupgxO77Fa2l6R0Uhjebubhv1YmhwHgQt2mrHRjk22OvcX54wnystTS9Y6aQyPIL3FocQABdowjIbDYBY1uZ0scpyxuWV/6rE7pWTBc3Bn7n7Df0VsanjkyfEPRVTwbD2P2Wq1dTzlJ8TfQ/suZL37p+CheISJERdIvODrfJ7Njd77+AP7hRM85SLW9/KjG4OPiQP0UcHOK8/j5XrPoatV+0YCV+FAhXPKjWqzyHdnrkplwfR2ikO94Hg0fuoZWnk97fUKd6it/s198jvKw/RdPs5Xq9GW0eIkSIi7ptBERAEREAREQBERAEREB8xaV0NOZ6g8Wc6iYjNuwyvI6etaEmganohcey37qxNJQ48cjR/FeDbfiK8UDG4TckPxEAHIWAFu+9xZc/8Al1HeyRVndyCaT0PUuay1O/KGFpyHzBhd34gsGsVFVS8QXRSFzYg05bnOsPCyt3iYXDnG23b0XAIzG3nHvC5FXo6IusSG9HvGi5w3OdjZu07OjebKKxdVvVIl3jtaxTb9DVP8iTb9FYH6IqM/YSfdKszSETWOAaTbC03uDmRckWAyWQOEwsTaUbD9Mbj1qM8fOO8UQ730N7g6HsfstVo6nbJe1voVWHB/7p3YPVWfqfsl7W+hUn770X2MLxCRoiLpF5DtaJLz23NA8c/1XDOxx7V1dYX3qJOrCPBoXIPNPWf1XmcU71ZP1Zpz3ZjQr8uvwlapA1qz5vxegKsPU1lqSPrLz4vcq6rNrR8R8AP3Vm6sstSQf4bT94X/AFXW7MXtt+hfR3OmiIu0bAREQBERAEREAREQBERAfPzNaoo3zNIkI42UG1toe4G2a1//ABTFf3so7W3/AFKjFQy8kh3yyHxe4rWkiWv/ABIXvr9SGRFiaH1mheXATWLWF5u0izWjM7M/mi3WsVXrVSkkCoAPW0j9OpQTR0gjficCRaxzsLFzcQORuCAR336FzJ4hc22XNunK+Qucyq3gIbqTGRE/fp2InKaA59Nu3pWKXSDXWs6EWNwWuaD09N9mfkFXMsK1pGW6Fh4K/wATI90vMuvg+90fhHqrQ1Q2SdrfQqsNQPdH4G+v9FZ2p+yXtb6FVS9+6L7EI8ZI0ReJZA0EnYF0W7K5sEB0o+8sp+u7yNgtGTmjtWWZ18R3knxKw1HzfFeWqO8mzSk9TFdfhReCqyJqVZ5XYwnxP9FbWi48MMTd0bB4NCqSUXc74QPG/wC6uNgsANwXY7MXE/kbFHmekRF1i8IiIAiIgCIiAIiIAiIgPlZ4uXH67/zFeqTRck2LigDhLQbkC2PFZxv80YDc9FxvV5z8F2jHElsUjLkk4ZZbXOZyc4jyXKquB2kJuyoqGHozjcB2cgHzUroxYp2q0HUtNjC+9i8AWLrMAc52HbYYgPi5O3Jc+ppiHBtiXkgYQLkvNuQ0DNzrm1h0q3angcnDS2DSTmtzOF0bgCSb3OCQDbns22Xmv1F0uGO9pSyu52MyTtdiDcOItIc0jY7DkA4YtqxcFLPatWdgsclL9Jan6Tc90joWvc43JjfGOi3NuNwXHqtWq1o5VJP3MLh+G6gq1N7SX1MZl5lkcHzuQ74W+rlaGp/8X7H+5V9qfoSSmjPGlpe6ws0khobe2ZAuc9ysDU/+L9j/AHLmd5GeNzRen+imHGSVaGmvdO7ERdGrwMvlsQOTZ4LFU7R2Ii8u9zRZgK8FEUQa9KPa/aZ+iuJEXb7N4ZdDYo8wiIumXhERAEREAREQBERAEREAREQBY6gcl3wn0X4iw9gRxlLHYchv3QscsDAcmt8AvxFyXFZdjWex6ipmZ8hvgF1dCxtaX2AGTdgA+kiK3DpZokobn//Z",
                "description": "Klimmzugstange",
                "content": "Perfekter Halt und Komfortabler Griff, ohne Schrauben sofort einsatzbereit",
                "price": 49.99,
                "count": 1
            },
            {
                "_id": "9",
                "title": "Drinking Bottle",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfzEsnXPG510ijcwyq4izZPpQ4MuQ1FWqD68YDemXhs0oaL_E9I-cftfaxlwYS7T3XQMS2JQ&usqp=CAc",
                "description": "Sportwassserflasche",
                "content": "Auslaufsicher und Schadstofffrei",
                "price": 12.99,
                "count": 1
            },
            {
                "_id": "10",
                "title": "Protein Shaker",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZM_19TdEZSTR8OvHW1Wun_jYPWYR0l8FH8VflY_n2F_bbyLNZLkBM5DuXGQEgw57BdKZhCde&usqp=CAc",
                "description": "Protein Shaker",
                "content": "Maximale Füllmenge: 700ml",
                "price": 9.99,
                "count": 1
            }

        ]
    }
    render() {
        const {products} = this.state;

        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

