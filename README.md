# 🧮 Modern Calculator

A sleek, interactive, and highly robust web calculator built from scratch as part of **The Odin Project** curriculum. It features a modern dark mode design with a retro LCD-style screen and advanced operation logic to prevent common calculation bugs.

<img width="450" alt="image" src="https://github.com/user-attachments/assets/c48f70da-b75a-4eca-8a23-cd8d4e15c96a" />


---

## ✨ Features

*   **Core Math Operations:** Addition, subtraction, multiplication, and division.
*   **Decimal Safety:** Rounding of long decimal results to maximum 4 decimal places to prevent overflow.
*   **Division by Zero Protection:** Displays a friendly warning message instead of breaking the logic or returning `Infinity`.
*   **Smart Operation Chaining:** 
    *   Allows running sequential calculations smoothly (e.g., `2 + 2 + 3` evaluates `4` first, then prepares for the next operation).
    *   Pressing consecutive operators correctly overrides the previous one without triggering accidental evaluations.
*   **Smart Reset on Equals:** Pressing a new number directly after displaying a result automatically clears the calculator and starts a fresh calculation.
*   **Continued Calculations:** Pressing an operator directly after equals allows you to continue calculations using the current result.
*   **Beautiful UI/UX:** A modern slate theme with a warm sand-colored display, perfect contrast, and rounded interactive buttons.

---

## 🛠️ Built With

*   **HTML5** - Structured layout
*   **CSS3** - Custom modern styling & Grid/Flexbox layouts
*   **JavaScript** - Dynamic DOM manipulation and state management

---

## 🚀 How to Run

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
