# api pokemon

### Body para criação de pokemon
* url para criar: POST http://localhost:3000/pokemon
```
{
    "nome": "charmander",
    "elemento": "planta",
        "estatistica": {
            "vida": 100,
            "defesa":8
        },
        "habilidades": [
            {
                "nome": "tackle",
                "dano": 10
            },
            {
                "nome": "ember",
                "dano": 15
            },
             {
                "nome": "flamethrow",
                "dano": 20
            },
            {
                "nome": "scratch",
                "dano": 10
            }      
        ]
}
```

```
{
    "nome": "charmander",
        "estatistica": {
            "vida": 100,
            "defesa":8
        },
        "habilidades": [
            {
                "nome": "tackle",
                "dano": 10
            },
            {
                "nome": "ember",
                "dano": 15
            },
             {
                "nome": "flamethrow",
                "dano": 20
            },
            {
                "nome": "scratch",
                "dano": 10
            }      
        ],
         "elemento" : "fogo"
}
```