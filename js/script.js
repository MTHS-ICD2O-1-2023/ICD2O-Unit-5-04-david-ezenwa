// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function checkDiscount() {
  const ageInput = parseInt(document.getElementById("age-entered").value)
  const dayOfWeek = document.getElementById("day-of-week").value
  let discountMessage = ""

  if ((dayOfWeek === "Wednesday" && ageInput >= 60) || (dayOfWeek === "Sunday" && ageInput <= 12)) {
    discountMessage = "You get a discount!"
  } else {
    discountMessage = "No discount for you."
  }

  document.getElementById("answer").innerHTML = discountMessage
}
