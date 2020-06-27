import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

export const getAll = (name) => {
  const helper = client.paginate(q.Match(q.All))
  return helper.map((ref) => q.Get(ref)).each((page) => page)
}

export const createOrUpdateMarker = (marker) => {
  return client
    .query(q.Create(q.Collection('markers'), {marker}))
    .then((ret) => ret)
}
