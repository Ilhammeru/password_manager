import { definePreset } from "@primeuix/themes";
import Aura from '@primeuix/themes/aura';

const CipherVaultTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#1A237E', // Deep Navy Blue
                    inverseColor: '#ffffff',
                    hoverColor: '#0D47A1', // Darker Blue
                    activeColor: '#1565C0' // Active Blue
                },
                highlight: {
                    background: '#1A237E', // Deep Navy
                    focusBackground: '#2962FF', // Electric Blue
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '#E0E0E0', // Light Gray
                    inverseColor: '#1A237E', // Deep Navy
                    hoverColor: '#2962FF', // Electric Blue
                    activeColor: '#64B5F6' // Lighter Blue
                },
                highlight: {
                    background: 'rgba(26, 35, 126, 0.16)', // Navy with opacity
                    focusBackground: 'rgba(41, 98, 255, 0.24)', // Electric Blue with opacity
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    },
    // Optional: Extend with your accent colors
    colors: {
        electricBlue: '#2962FF',
        cryptoGreen: '#4CAF50',
        charcoal: '#121212',
        iceBlue: '#81D4FA'
    }
});

export default CipherVaultTheme;