# genshin-scraper-api

## Endpoints

### GET All Playable Characters

`GET https://api-genshinimpact.herokuapp.com/api/v1/characters`
|Query Parameters|Description|
|---|---|
|limit|Limit the characters returned|

### GET One Playable Character

`GET https://api-genshinimpact.herokuapp.com/api/v1/characters/name`

_Where name is the name of the character_
_Name can be whitespace or underline_

**Example**:
`GET https://api-genshinimpact.herokuapp.com/api/v1/characters/Hu_Tao` or `GET https://api-genshinimpact.herokuapp.com/api/v1/characters/Hu Tao` is the same

### GET All Weapons

`GET https://api-genshinimpact.herokuapp.com/api/v1/weapons`
|Query Parameters|Description|
|---|---|
|limit|Limit the weapons returned|
|type|Return all weapons with that type|

#### Available Types

-   "Sword"
-   "Bow"
-   "Claymore"
-   "Polearm"
-   "Catalyst"

_The first letter must be uppercase_

### GET One Weapon

`GET https://api-genshinimpact.herokuapp.com/api/v1/weapons/name`

_Where name is the name of the weapon_
_Name can be whitespace or underline_

**Example**:

`GET https://api-genshinimpact.herokuapp.com/api/v1/weapons/Engulfing_Lightning` or `GET https://api-genshinimpact.herokuapp.com/api/v1/weapons/Engulfing Lightning` is the same

### GET All Artifacts

`GET https://api-genshinimpact.herokuapp.com/api/v1/artifacts`

| Query Parameters | Description                  |
| ---------------- | ---------------------------- |
| limit            | Limit the artifacts returned |

### GET One Artifact

`GET https://api-genshinimpact.herokuapp.com/api/v1/artifacts/name`

_Where name is the name of the artifact_
_Name can be whitespace or underline_

**Example**:

`GET https://api-genshinimpact.herokuapp.com/api/v1/artifacts/Lucky_Dog` or `GET https://api-genshinimpact.herokuapp.com/api/v1/artifacts/Lucky Dog` is the same
