import { useState } from "react";

/**
 *
 * @param phases An array of the possible phases describing their sequence
 * @param initialPhaseIndex An index according to which the initial phase should be set
 * @example
 * const registrationPhases: ["PERSONAL_DATA", "CONTACT_DATA", "VERIFICATION"] = [
 *   "PERSONAL_DATA",
 *   "CONTACT_DATA",
 *   "VERIFICATION",
 * ];
 * const { phase, setNextPhase, setPreviousPhase } = usePhase(registrationPhases, 0);
 * @returns Navigational setters and a getter
 */
export const usePhase = <TPhase>(phases: TPhase[], initialPhaseIndex = 0) => {
  const [phaseIndex, setPhaseIndex] = useState(
    initialPhaseIndex < phases.length ? initialPhaseIndex : null
  );

  const phase = phaseIndex !== null ? phases[phaseIndex] : null;

  const setNextPhase: () => void = () => {
    setPhaseIndex((previousPhaseIndex) => {
      if (previousPhaseIndex === null) {
        return null;
      }
      const newPhaseIndex = previousPhaseIndex + 1;
      if (newPhaseIndex >= phases.length) {
        return previousPhaseIndex;
      }
      return newPhaseIndex;
    });
  };

  const setPreviousPhase: () => void = () => {
    setPhaseIndex((previousPhaseIndex) => {
      if (previousPhaseIndex === null) {
        return null;
      }
      const newPhaseIndex = previousPhaseIndex - 1;
      if (newPhaseIndex < 0) {
        return previousPhaseIndex;
      }
      return newPhaseIndex;
    });
  };

  return { setNextPhase, setPreviousPhase, phase };
};
