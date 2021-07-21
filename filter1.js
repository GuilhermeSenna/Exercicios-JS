const values = {
    ACTIVE: 1,
    INACTIVE: 2,
    CANCELED: 3,
    PENDING: 4,
}

let validValues = [ 'ACTIVE', 'INACTIVE' ]

let statusEnum =
    /** creat array of entries. **/
    Array.from(Object.entries(values))
    /** remove values we dont need, based on multiple values we want */
    .filter(([k,])=>validValues.findIndex((vv)=>vv===k)!==-1)
    // /** Map over the entries, reverse the k/v, and make sure all are strings. **/
    .map(a=>a.reverse().map((b)=>b.toString()))
    // /** compile the k/v to a new map. **/
    .reduce((m,[key,value])=>m.set(key,value), new Map());

/**
Map { '1' => 'ACTIVE', '2' => 'INACTIVE' }
**/