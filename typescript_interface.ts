export type AllDescriptions = { [key: string]: ClarityDescription }

interface ClarityDescription {
   id: number
   name: string
   itemId?: number // id of item holding perk for example exotic armor id
   itemName?: string // name of item holding perk for example exotic armor name
   type: ItemTypes | string
   lastUpdate: number // date in ms
   stats?: Stats // perk stats
   updatedBy?: string // name of person who updated the description
   description?: Description[]
}

type ItemTypes =
   | 'armorExotic'
   | 'armorMod'
   | 'weaponPerkExotic'
   | 'weaponFrameExotic'
   | 'weaponCatalystExotic'
   | 'weaponPerk'
   | 'weaponPerkEnhanced'
   | 'weaponOriginTrait'
   | 'weaponFrame'
   | 'weaponMod'
   | 'ghostMod'

interface Description {
   lineText?: DescriptionLineText[]
   className?: string
   table?: Table[]
   formula?: boolean
}

interface DescriptionLineText {
   text?: string // normal text
   formulaText?: string // text used in formula exampe In-Game Range
   formula?: string // stuff used to find what kind of formula should be used
   className?: string
   linkUrl?: string
   linkText?: string
}

interface Table {
   lineText?: TableLineText[]
   className?: 'table'
}

interface TableLineText {
   text?: string
   className?: string
   formulaText?: string // text used in formula exampe In-Game Range
   formula?: string // stuff used to find what kind of formula should be used
}

interface Stats {
   damage?: StatActive
   handling?: StatActive
   aimAssist?: StatActive
   range?: StatActive
   chargeDrawTime?: StatActive
   chargeDraw?: StatActive
   reload?: StatActive
   stability?: StatActive
   zoom?: StatActive
}

interface StatActive {
   passive?: StatNumbers
   active?: StatNumbers
}

interface StatNumbers {
   stat?: number[]
   multiplier?: number[]
}
