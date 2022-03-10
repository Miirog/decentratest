/// --- Set up a system ---

import { spawn } from "@decentraland/PortableExperiences"
import * as EthereumController from "@decentraland/EthereumController"
import { toHex } from "eth-connect"
import * as crypto from '@dcl/crypto-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { Request } from 'express'
import * as dcl from 'decentraland-crypto-middleware'
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import * as utils from '@dcl/ecs-scene-utils'

let elevator = new Entity()
elevator.addComponent(new GLTFShape("models/elevator.gltf"))
elevator.addComponent(
    new Transform(
    )
)

let path = []
path[0] = new Vector3(13.7, 0, 7.8)
path[1] = new Vector3(13.7, 5.2, 7.8)
path[2] = new Vector3(13.7, 5.2, 7.8)
path[3] = new Vector3(13.7, 5.2, 7.8)
path[4] = new Vector3(13.7, 5.2, 7.8)
path[5] = new Vector3(13.7, 5.2, 7.8)
path[6] = new Vector3(13.7, 5.2, 7.8)
path[7] = new Vector3(13.7, 5.2, 7.8)
path[8] = new Vector3(13.7, 5.2, 7.8)
path[9] = new Vector3(13.7, 5.2, 7.8)
path[10] = new Vector3(13.7, 5.2, 7.8)
path[11] = new Vector3(13.7, 5.2, 7.8)
path[12] = new Vector3(13.7, 5.2, 7.8)
path[13] = new Vector3(13.7, 0, 7.8)

elevator.addComponent(
    new utils.Interval(3000, () => {
        elevator.addComponent(new utils.FollowPathComponent(path, 4))
    }
  )
)
engine.addEntity(elevator)



const test = new Entity()
test.addComponent(new GLTFShape("models/test2.gltf"))
test.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
engine.addEntity(test)


const L1 = new Entity()
L1.addComponent(new GLTFShape("models/Photos/L1.gltf"))
L1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
L1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(L1)


const L2 = new Entity()
L2.addComponent(new GLTFShape("models/Photos/L2.gltf"))
L2.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
L2.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(L2)

const L3 = new Entity()
L3.addComponent(new GLTFShape("models/Photos/L3.gltf"))
L3.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
L3.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(L3)

const R1 = new Entity()
R1.addComponent(new GLTFShape("models/Photos/R1.gltf"))
R1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
R1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(R1)

const R2 = new Entity()
R2.addComponent(new GLTFShape("models/Photos/R2.gltf"))
R2.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
R2.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(R2)

const R3 = new Entity()
R3.addComponent(new GLTFShape("models/Photos/R3.gltf"))
R3.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
R3.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(R3)

const BL1 = new Entity()
BL1.addComponent(new GLTFShape("models/Photos/BL1.gltf"))
BL1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
BL1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(BL1)

const BR1 = new Entity()
BR1.addComponent(new GLTFShape("models/Photos/BR1.gltf"))
BR1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
BR1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(BR1)

const UL1 = new Entity()
UL1.addComponent(new GLTFShape("models/Photos/UL1.gltf"))
UL1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
UL1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(UL1)

const Front = new Entity()
Front.addComponent(new GLTFShape("models/Photos/Front.gltf"))
Front.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
Front.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(Front)

const BigU = new Entity()
BigU.addComponent(new GLTFShape("models/Photos/BigU.gltf"))
BigU.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
BigU.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(BigU)

const UR1 = new Entity()
UR1.addComponent(new GLTFShape("models/Photos/UR1.gltf"))
UR1.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
UR1.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(UR1)

const UR2 = new Entity()
UR2.addComponent(new GLTFShape("models/Photos/UR2.gltf"))
UR2.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
UR2.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(UR2)

const UR3 = new Entity()
UR3.addComponent(new GLTFShape("models/Photos/UR3.gltf"))
UR3.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
UR3.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(UR3)

const UR4 = new Entity()
UR4.addComponent(new GLTFShape("models/Photos/UR4.gltf"))
UR4.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
UR4.addComponent(
    new OnClick(() => {
        openExternalURL("https://www.yoficial.com.br/")
    }
    )
)
engine.addEntity(UR4)











