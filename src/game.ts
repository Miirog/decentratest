/// --- Set up a system ---

import { spawn } from "@decentraland/PortableExperiences"
import * as EthereumController from "@decentraland/EthereumController"
import { toHex } from "eth-connect"
import * as crypto from '@dcl/crypto-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { Request } from 'express'
import * as dcl from 'decentraland-crypto-middleware'

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

///SERver?


// Add a new instance of the system to the engine


/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)

cube.addComponent(
  new OnClick(() => {
      cube.getComponent(Transform).scale.z *= 1.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)

/// TESTES

let Banner = new Entity()
Banner.addComponent(new GLTFShape("models/Banner.gltf"))
Banner.addComponent(
    new Transform({
        position: new Vector3(1, 0, 10),
        scale: new Vector3(1, 1, 1),
    })
     
)
Banner.addComponent(
        new OnClick(() => {
            openExternalURL("https://maverickdash.com")
        }
        ))
engine.addEntity(Banner)

let bald = new Entity()
bald.addComponent(new GLTFShape("models/bald.gltf"))
bald.addComponent(
    new Transform({
        position: new Vector3(3, 1, 5),
        scale: new Vector3(1, 1, 1),
    })
)
bald.addComponent(
new OnClick(() => {
    executeTask(async () => {
        await crypto.marketplace.executeOrder(
            ´0x50094929E8EedCa269e903B4Ff408591FA528d89´,
            ´28703´,
            ´100´
        )
    }
    }
))

engine.addEntity(bald)


const cube = spawnCube(1, 3, 1)

cube.addComponent(
    new OnClick(() => {
        executeTask(async () => {
         const message = await crypto.ethereum.signMessage('msg: this is a top secret message')
         log(`MESSAGE: `, message)
    })
    }
    )
)

let plaza = new Entity()
plaza.addComponent(new GLTFShape("models/plaza.gltf"))
plaza.addComponent(
    new Transform({
        position: new Vector3(16, 0, 16),
        scale: new Vector3(1, 1, 1)
    })
)
///plaza.addComponent(
///    new OnClick(() => {
///        openExternalURL("https://maverickdash.com")
///    })
///)
const clip = new AudioClip("sounds/Shootingstars.mp3")
const source = new AudioSource(clip)
plaza.addComponent(source)
source.playing = true
engine.addEntity(plaza)

let tree = new Entity()
tree.addComponent(new GLTFShape("models/tree.gltf"))
tree.addComponent(
    new Transform({
        position: new Vector3(16, 0, 16),
        scale: new Vector3(1, 1, 1)
    })
)
engine.addEntity(tree)

