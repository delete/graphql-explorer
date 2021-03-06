import * as R from 'ramda'
import { toCamelCase, toStudlyCaps } from 'strman'

export const isNodeModel = R.propSatisfies(R.equals('model'), 'type')

export const normalizeNodeName = R.ifElse(
  isNodeModel,
  R.over(R.lensProp('name'), toStudlyCaps),
  R.over(R.lensProp('name'), toCamelCase)
)