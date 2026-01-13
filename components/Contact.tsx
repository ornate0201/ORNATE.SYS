
import React, { useState } from 'react';
import { Mail,Send,Github,Facebook,CheckCircle,AlertCircle,ExternalLink,Copy,Terminal } from 'lucide-react';



export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const emailAddress = "ornatebpereira@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Using FormSubmit.co - No account setup required initially. 
      // Note: You will need to click an activation link in the first email you receive.
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gateway rejected payload');
      }
    } catch (error) {
      console.error('Transmission Error:', error);
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Contact from ${formData.name || 'Portfolio User'}`);
    const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-6 bg-cyber-black relative scroll-mt-20">
      <div className="max-w-4xl mx-auto border border-gray-800 rounded-xl overflow-hidden bg-cyber-gray/30 backdrop-blur-md">
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-cyber-neon" />
            <span className="font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">COMMS_TERMINAL_V3.0</span>
          </div>
        </div>
        
        <div className="p-6 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Connection Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-mono font-bold text-cyber-neon mb-4">ESTABLISH_LINK</h2>
                <p className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed">
                  The gateway is open. Use the form to transmit data or use the direct mail protocol for immediate synchronization.
                </p>
              </div>
              
              <div className="space-y-4">
                <div 
                  onClick={handleCopyEmail}
                  className="group cursor-pointer flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-cyber-neon/50 transition-all bg-black/20"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg text-cyber-neon bg-cyber-neon/5 group-hover:bg-cyber-neon/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">PRIMARY_MAIL_NODE</p>
                    <p className="font-mono text-white text-xs sm:text-sm truncate">{emailAddress}</p>
                  </div>
                  <div className="p-2 text-gray-500 group-hover:text-cyber-neon transition-colors">
                    {copied ? <CheckCircle size={16} className="text-cyber-neon" /> : <Copy size={16} />}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                <a
                     href="https://facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 py-3 border border-gray-800 rounded-lg flex items-center justify-center gap-2 hover:border-cyber-neon hover:text-cyber-neon transition-all font-mono text-xs"
                >                   
                    <Facebook size={16} /> FACEBOOK
                      </a>

                  <a href="https://github.com/ornate0201" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 border border-gray-800 rounded-lg flex items-center justify-center gap-2 hover:border-cyber-neon hover:text-cyber-neon transition-all font-mono text-xs">
                    <Github size={16} /> GITHUB
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/50">
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse"></div>
                  STATUS: LISTENING_FOR_INBOUND_PAYLOADS
                </div>
              </div>
            </div>

            {/* Right Column: Transmission Form */}
            <div className="relative">
              {status === 'SUCCESS' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-cyber-neon/5 border border-dashed border-cyber-neon/30 rounded-lg animate-in fade-in duration-500">
                  <CheckCircle className="text-cyber-neon w-16 h-16 mb-4 animate-bounce" />
                  <h3 className="font-mono font-bold text-white mb-2 uppercase">Packet_Delivered</h3>
                  <p className="text-gray-400 text-xs font-mono mb-6">Your data has been successfully routed to the target inbox.</p>
                  <button 
                    onClick={() => setStatus('IDLE')}
                    className="text-cyber-neon border border-cyber-neon px-8 py-2 font-mono text-xs hover:bg-cyber-neon hover:text-black transition-all uppercase tracking-widest"
                  >
                    Send_New_Packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-cyber-neon uppercase tracking-widest ml-1">Identity_String</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-black/40 border border-gray-800 p-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-cyber-neon/50 transition-colors text-white rounded-md placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-cyber-neon uppercase tracking-widest ml-1">Return_Link</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-black/40 border border-gray-800 p-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-cyber-neon/50 transition-colors text-white rounded-md placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-cyber-neon uppercase tracking-widest ml-1">Payload_Content</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Input message bytes..."
                      className="w-full bg-black/40 border border-gray-800 p-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-cyber-neon/50 transition-colors text-white resize-none rounded-md placeholder:text-gray-700"
                    ></textarea>
                  </div>

                  {status === 'ERROR' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/40 rounded text-red-400 text-[11px] font-mono space-y-3 animate-in slide-in-from-top-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="shrink-0" />
                        <span className="font-bold uppercase tracking-tighter">Gateway_Timeout_Error</span>
                      </div>
                      <p className="opacity-90 leading-tight">External API transmission failed due to environment restrictions. Re-routing via direct SMTP protocol:</p>
                      <button 
                        type="button"
                        onClick={handleMailtoFallback}
                        className="w-full py-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-white rounded flex items-center justify-center gap-2 transition-all font-bold"
                      >
                        <ExternalLink size={14} /> OPEN_DIRECT_MAIL_CLIENT
                      </button>
                    </div>
                  )}

                  <button 
                    disabled={status === 'SENDING'}
                    type="submit"
                    className={`w-full py-4 bg-cyber-neon text-black font-mono font-bold flex items-center justify-center gap-2 hover:bg-white transition-all rounded shadow-[0_0_20px_rgba(0,255,204,0.15)] active:scale-95 group ${status === 'SENDING' ? 'opacity-50 cursor-wait' : ''}`}
                  >
                    {status === 'SENDING' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        TRANSMITTING_PACKET...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                        TRANSMIT_MESSAGE
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-neon/5 blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};
