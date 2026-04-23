# QF-LCA: Quantum Field Lens Coding Algorithm

This repository implements the **Quantum Field Lens Coding Algorithm (QF-LCA)** based on the research of **Philip Alipour (University of Victoria)**. It explores the transformation of Single-Field (SF) systems into Quantum Double-Field (QDF) states to double prediction probabilities in thermodynamic simulations.

---

<details>
<summary><b>📊 1. Geometric State Correlation (Convex vs. Concave)</b></summary>

The "Lens" effect focuses state information. To achieve the **Strong Prediction** threshold, parameters must stay within the critical focus window ($|\kappa^2| \rho \leq 2$).


| Parameter / Stage | **Concave (Dissipative)** | **Convex (Focused Peak)** |
| :--- | :--- | :--- |
| **Field Model** | Single-Field (SF) | [Quantum Double-Field (QDF)](https://doi.org) |
| **Kappa ($\kappa$) Bound** | $\kappa < 1$ or $\kappa > 1.41$ | **$1.0 \leq \kappa \leq 1.41$** |
| **Probability ($P$)** | $P \approx 1/3$ (Standard) | **$P \geq 2/3$ (Doubled Space)** |
| **Fidelity $\langle M(F) \rangle$** | $< 1.0$ | **$\geq 7/5$** |
| **Entropy Type** | Linear (Shannon) | Non-linear (Entanglement Entropy) |

</details>

---

<details>
<summary><b>🛠️ 2. Technical Requirements & Dependencies</b></summary>

```bash
pip install numpy scipy matplotlib qiskit pandas scikit-learn
```
- **Qiskit**: For the 3-qubit DFC circuit implementation.
- **NumPy/SciPy**: For managing $\kappa$ arrays and tensor operations.
- **Scikit-Learn**: For training the Quantum AI (QAI) classifier.
</details>

---

<details>
<summary><b>💻 3. Core Implementation: Python & Qiskit</b></summary>

### Restricted Field Lens Scaling
This logic enforces the mathematical stability window where $\rho \approx 1$ and $\kappa \approx \sqrt{2}$.

```python
def apply_qf_lens_scaling(kappa, rho, p_sf):
    # Constraint: |kappa^2| * rho <= 2.0
    if (1.0 <= kappa <= 1.414) and (abs(kappa**2 * rho) <= 2.0):
        # Convex: Double the probability space
        p_qdf = (2 * kappa * p_sf) / (1 + (kappa - 1) * p_sf)
        return p_qdf, "Strong Prediction"
    else:
        # Concave: Dissipative SF state
        return p_sf * (kappa / 2.0), "Weak Prediction"
```

### 3-Qubit Interaction (DFC)
```python
from qiskit import QuantumCircuit

def create_qdf_circuit():
    qc = QuantumCircuit(3) # Q1: Sample, Q2: Partner, Q3: Decoder
    qc.h(0)
    qc.cx(0, 1)
    qc.cx(1, 2)
    qc.swap(0, 2) # The DFC Step to decode hidden info
    return qc
```
</details>

---

<details>
<summary><b>🚀 4. How to Use & Validate (P ≥ 2/3)</b></summary>

Run the simulation to observe the shift from $P \approx 1/3$ to $P \geq 2/3$ at the high-fidelity peak:

```python
p_initial = 0.333  # Standard SF Limit
kappa_val = 1.41   # Approaching sqrt(2)
rho_val = 1.0      # Ideal interaction density

p_predicted, status = apply_qf_lens_scaling(kappa_val, rho_val, p_initial)
print(f"Status: {status} | Predicted QDF Probability: {p_predicted:.3f}")
# Output should be >= 0.666
```
</details>

---

<details>
<summary><b>⚠️ 5. Troubleshooting & Decoherence</b></summary>

- **Saturation Error**: If $|\kappa^2| \rho > 2$, the "bridge" qubit cannot decode information, causing the lens to blur.
- **Fidelity Drop**: If $\langle M(F) \rangle < 7/5$, verify if $\rho$ has drifted away from the ideal value of $1.0$.
- **Error Mitigation**: Use **Zero-Noise Extrapolation (ZNE)** to preserve the three-way entanglement required for the convex peak.
</details>

---
### Reference
Alipour, P. (2023). *Quantum Field Lens Coding*. University of Victoria (UVicSpace).
[MethodsX Publication](https://doi.org) | [Mendeley Dataset](https://doi.org)
---
### ⚖️ Licensing & Copyright
- **Software Code**: This implementation is licensed under the [MIT License](LICENSE).
- **Theoretical Research**: The **Quantum Field Lens Coding** dissertation is © 2023 Philip Alipour. 
- **Open Access**: Distributed via [UVicSpace](https://uvic.ca) under a non-exclusive license. 
- **Reuse**: For any substantial reuse of diagrams, math, or text from the dissertation, please follow [CC BY-NC 4.0](https://creativecommons.org) guidelines and provide proper attribution.
