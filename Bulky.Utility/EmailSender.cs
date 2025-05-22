using Microsoft.AspNetCore.Identity.UI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.Utility
{
    public class EmailSender:IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            // Here we can implement your email sending logic using SMTP or any other email service
            // For example, using SmtpClient or any third-party library like SendGrid, Mailgun, etc.

            return Task.CompletedTask;
        }
    }
}
