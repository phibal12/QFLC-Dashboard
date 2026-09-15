/**
 * QDF Terminal Command Processor Module
 * 2xQuBABE System State Controller
 */
window.QDFTerminalEngine = {
  // Available commands registry for auto-help/documentation
  commands: {
    "--sys_off": "Powers OFF the cryostat system.",
    "--sys_on": "Powers ON the cryostat system.",
    "--clear": "Clears all terminal logs.",
    "--reset_data": "Clears recorded dataset registry.",
    "--mode_wet": "Switches cryostat chamber to Wet mode.",
    "--mode_dry": "Switches cryostat chamber to Dry mode.",
    "--flow_high": "Sets coolant flow level to High.",
    "--flow_opt": "Sets coolant flow level to Optimal.",
    "--flow_low": "Sets coolant flow level to Low.",
    "--help": "Displays available terminal commands."
  },

  /**
   * Main Command Dispatcher
   * @param {string} input - Raw string entered by the user
   * @param {Object} stateHandlers - Functions to mutate main React state
   * @returns {Object} { success: boolean, output: string, type: string }
   */
  processCommand(input, stateHandlers) {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return null;

    // 1. System Power Controls
    if (cmd === "--sys_off") {
      stateHandlers.setIsPowerOn(false);
      return { output: "EXEC: SYSTEM POWER SET TO OFF", type: "rose" };
    }
    if (cmd === "--sys_on") {
      stateHandlers.setIsPowerOn(true);
      return { output: "EXEC: SYSTEM POWER SET TO ON", type: "emerald" };
    }
// 2xQuBABE-terminal-commands.js
if (cmd === "--sys_pause" || cmd === "pause") {
  if (typeof stateHandlers.setIsPlaying === "function") {
    stateHandlers.setIsPlaying(false); // Triggers parent's [isPlaying] reactive sync
  }
  return { 
    output: "EXEC: SYSTEM EVENTS PAUSED (Particle Flow & Telemetry Halted)", 
    type: "emerald" 
  };
}

if (cmd === "--sys_play" || cmd === "play" || cmd === "run") {
  if (typeof stateHandlers.setIsPlaying === "function") {
    stateHandlers.setIsPlaying(true); // Resumes parent & children sync
  }
  return { 
    output: "EXEC: SYSTEM EVENTS RESUMED", 
    type: "emerald" 
  };
}

if (cmd === "--sys_play" || cmd === "play" || cmd === "run") {
  if (typeof stateHandlers.setIsPlaying === "function") {
    stateHandlers.setIsPlaying(true);
  }
  return { 
    output: "EXEC: SYSTEM EVENTS RESUMED", 
    type: "emerald" 
  };
}

    // 2. Terminal & Dataset Clears
    if (cmd === "--clear") {
      stateHandlers.setTerminalLogs([]);
      return { output: "TERMINAL LOGS CLEARED", type: "cyan" };
    }
    if (cmd === "--reset_data") {
      stateHandlers.setQdfDataset([]);
      return { output: "DATASET REGISTRY RESET", type: "amber" };
    }

    // 3. Chamber Operational Mode Controls
    if (cmd === "--mode_wet") {
      stateHandlers.setCryoMode("wet");
      return { output: "EXEC: CRYOSTAT MODE SWITCHED TO WET", type: "cyan" };
    }
    if (cmd === "--mode_dry") {
      stateHandlers.setCryoMode("dry");
      return { output: "EXEC: CRYOSTAT MODE SWITCHED TO DRY", type: "cyan" };
    }

    // 4. Coolant Gas Flow Controls
    if (cmd === "--flow_high") {
      stateHandlers.setCoolantFlow("high");
      return { output: "EXEC: COOLANT FLOW SET TO HIGH", type: "teal" };
    }
    if (cmd === "--flow_opt") {
      stateHandlers.setCoolantFlow("optimal");
      return { output: "EXEC: COOLANT FLOW SET TO OPTIMAL", type: "teal" };
    }
    if (cmd === "--flow_low") {
      stateHandlers.setCoolantFlow("low");
      return { output: "EXEC: COOLANT FLOW SET TO LOW", type: "teal" };
    }

    // 5. Dynamic Help Menu
    if (cmd === "--help") {
  const helpLines = Object.entries(this.commands)
    .map(([k, v]) => `➜ ${k}\n   ↳ ${v}`)
    .join("\n");
  return { output: `AVAILABLE COMMANDS:\n${helpLines}`, type: "amber" };
}

    // Unknown Command Fallback
    return { 
      output: `ERR: Unknown command '${cmd}'. Type '--help' for available options.`, 
      type: "rose" 
    };
  }
};