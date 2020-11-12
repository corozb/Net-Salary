const salaryCalculate = () => {
  // DOM Elements
  const role = parseInt(document.getElementById('role').value)
  const hours = parseInt(document.getElementById('hours').value)
  const years = parseInt(document.getElementById('years').value)
  const $salary = document.getElementById('basicSalary')
  const $familiar = document.getElementById('familiar')
  const $benefit = document.getElementById('benefit')
  const $long = document.getElementById('long')
  const $incentive = document.getElementById('incentive')
  const $isr = document.getElementById('isr')
  const $eps = document.getElementById('eps')
  const $afore = document.getElementById('afore')
  const $sindicate = document.getElementById('sindicate')
  const $income = document.getElementById('income')
  const $deductions = document.getElementById('deductions')
  const $netSalary = document.getElementById('netSalary')

  let salaryHour = 0

  switch (role) {
    case 1:
      salaryHour = 100
      break
    case 2:
      salaryHour = 70
      break
    default:
      salaryHour = 40
      break
  }

  // calculate
  const basicSalary = salaryHour * hours
  const familiar = parseFloat(basicSalary * 0.025)
  const benefit = parseFloat(basicSalary * 0.05)
  const long = parseFloat(years * 150)
  const incentive = parseFloat(basicSalary * 0.02)
  const allSalary = parseFloat(
    basicSalary + familiar + benefit + long + incentive
  )

  const isr = parseFloat(basicSalary * 0.15)
  const eps = parseFloat(basicSalary * 0.035)
  const afore = parseFloat(basicSalary * 0.04)
  const sindicate = parseFloat(basicSalary * 0.01)
  const allDeductions = parseFloat(isr + eps + afore + sindicate)
  const netIncome = parseFloat(allSalary - allDeductions)

  // render
  $salary.innerHTML = `<h3>$ ${basicSalary.toFixed(2)}</h3>`
  $familiar.innerHTML = `<h3>$ ${familiar.toFixed(2)}</h3>`
  $benefit.innerHTML = `<h3>$ ${benefit.toFixed(2)}</h3>`
  $long.innerHTML = `<h3>$ ${long.toFixed(2)}</h3>`
  $incentive.innerHTML = `<h3>$ ${incentive.toFixed(2)}</h3>`
  $isr.innerHTML = `<h3>$ ${isr.toFixed(2)}</h3>`
  $eps.innerHTML = `<h3>$ ${eps.toFixed(2)}</h3>`
  $afore.innerHTML = `<h3>$ ${afore.toFixed(2)}</h3>`
  $sindicate.innerHTML = `<h3>$ ${sindicate.toFixed(2)}</h3>`
  // Totals
  $income.innerHTML = `<h3>$ ${allSalary.toFixed(2)}</h3>`
  $deductions.innerHTML = `<h3>$ ${allDeductions.toFixed(2)}</h3>`
  $netSalary.innerHTML = `<h3>$ ${netIncome.toFixed(2)}</h3>`
}
