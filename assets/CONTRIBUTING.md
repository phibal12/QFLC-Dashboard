# Contributing to QF-LCA

Thank you for your interest in the **Quantum Field Lens Coding Algorithm**. To maintain the scientific accuracy of this framework, please adhere to the following guidelines.

---

<details>
<summary><b>🧪 1. Scientific Validation Standards</b></summary>

Any proposed changes to the core `apply_qf_lens_scaling` logic or the 3-qubit circuit must be validated against the **UVic Dissertation** benchmarks:
- **Fidelity Check**: Modifications must maintain a measurement fidelity $\langle M(F) \rangle \geq 7/5$ for the high-correlation peak.
- **Probability Bound**: Contributions must not violate the $|\kappa^2| \rho \leq 2$ limit without theoretical justification.
- **Tangle Metric**: Updates to the 3-qubit interaction should be tested for three-way entanglement consistency.
</details>

<details>
<summary><b>🛠️ 2. Pull Request (PR) Process</b></summary>

1. **Fork** the repository and create your feature branch.
2. **Implement Tests**: Include a simulation script that demonstrates your change using a standard QDF dataset.
3. **Documentation**: Update the relevant section of the `README.md` if your change affects the $\kappa$-$\rho$ scaling logic.
4. **Review**: All PRs involving the QDF mathematical model will be reviewed for alignment with published [MethodsX](https://doi.org) benchmarks.
</details>

<details>
<summary><b>📝 3. Academic Integrity & Transparency</b></summary>

- **Attribution**: Provide proper citations for any external quantum algorithms or datasets.
- **Environment**: Disclose the specific quantum hardware or simulators (e.g., IBM Quantum, Quantum Inspire) used to verify your results.
- **Open Access**: Ensure all contributions remain compatible with the project's Open Access licensing (MIT/CC-BY).
</details>

---

### Contact
For major theoretical discussions, please refer to the [UVicSpace archive](https://uvic.ca) or contact the project maintainer.
