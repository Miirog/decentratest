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

//let elevator = new Entity()
//elevator.addComponent(new GLTFShape("models/elevator.gltf"))
//elevator.addComponent(new Transform())


 
///engine.addEntity(elevator)

const test = new Entity()
test.addComponent(new GLTFShape("models/test.gltf"))
test.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)
engine.addEntity(test)
