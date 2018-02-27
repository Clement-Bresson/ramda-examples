import * as R from 'ramda'

export const getQueryParam = R.converge(R.compose(R.prop(1), R.find), [
  R.compose(R.propEq('0'), R.nthArg(1)),
  R.compose(
    R.map(R.split('=')),
    R.split('&'),
    R.invoker(1, 'substr')(1),
    R.nthArg(0)
  )
])
